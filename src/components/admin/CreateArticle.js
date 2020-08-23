import React, { useState, useEffect, useRef } from 'react';
import {app} from '../config/FireBaseConfig';
import M from 'materialize-css';
import { formatISO9075 } from 'date-fns';
import JoditEditor from "jodit-react";
import { useHistory } from "react-router-dom";

const db = app.firestore();
const storage = app.storage();
const config = {
    iframe: true,
    readonly: false,
    language: "ru",
    allowResizeY: false,
    toolbarAdaptive: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: false,
    height: 600,
    toolbarSticky: false,
    "disablePlugins": "resizer",
    buttons: "bold,strikethrough,underline,italic,eraser,ul,ol,outdent,indent,font,fontsize,brush,paragraph,,video,image,,table,link,|,align,undo,redo,\n,selectall,copy,paste,,hr"
	};

const CreateArticle = () => {

  let history = useHistory();

  const editor = useRef(null)

  const [newArticle, setNewArticle] = useState(); 
  const [titlePhoto, setTitlePhoto] = useState({file: '', url: ''});
  const [photo, setPhoto] = useState();
  const [content, setContent] = useState(); //state for the Rich Text Editor

  useEffect(() => {
    M.FormSelect.init(document.querySelectorAll('select'));
    M.CharacterCounter.init(document.querySelectorAll('#title, #first_para'));
  }, [])

  const onArticleChange = (e) =>{
    setNewArticle({
      ...newArticle,
      [e.target.id]: e.target.value,
      main_text: content,
      date: formatISO9075(new Date())
    })
  }

  const onFileChange = (e) => {
    setTitlePhoto({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])})
  }

  const addPhoto = (e) => {
    setPhoto(e.target.files[0])
  }

  useEffect(() => {
    if(photo){
      storage.ref().child(photo.name).put(photo)
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
        .then(url => {
          copyToClipboard(url);
          M.toast({html: 'Изображение скопировано в буфер обмена'})
        })
      }).catch(err => console.log(err.message));
    }
  }, [photo])

  const copyToClipboard = (url) => {
    var el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();

      await storage.ref().child(titlePhoto.file.name).put(titlePhoto.file);

      db.collection("articles").doc().set({
        ...newArticle,
        title_photo_url: await storage.ref().child(titlePhoto.file.name).getDownloadURL()
      })
      .then(() => {
        setNewArticle('');
        setContent('');
        setTitlePhoto('');
        history.push('/');
      }).catch((err) => {
        console.log('Ошибка: ' + err.message)
      })
    } 
    catch (error) {
      console.log('Ошибка загрузки фото: ' + error.message)
    }
  }

  return (  
    <form className="container create-form row" onSubmit={handleSubmit}>
      <div className="col s3">

        <div className="file-field input-field">
          <div className="btn-small green">
            <span>Фото в заглавие</span>
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>

        <div className="add-photo">
          <div className="file-field input-field">
            <div className="btn-small green">
              <span>Добавить фото</span>
              <input type="file" onChange={addPhoto} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </div>

      </div>

      <div className="col s9">

        <div className="title-img-container">
          <img src={titlePhoto.url} alt=""/>
        </div>

        <div className="input-field">
          <textarea id="title" onChange={onArticleChange} className="materialize-textarea" data-length="100" />
          <label  htmlFor="title">Заглавие</label>
        </div>

        <div className="input-field">
          <textarea id="first_para" onChange={onArticleChange} className="materialize-textarea" data-length="330" />
          <label  htmlFor="first_para">Первый параграф (Будет отображаться в новостной ленте)</label>
        </div>

        <div className="container">
          <JoditEditor
                ref={editor}
                   value={content}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => {}}/>
        </div>

        <div className="row">
          <div className="input-field col s12 m6">
            <select id="category" onChange={onArticleChange} defaultValue={'DEFAULT'}>
              <option disabled value="DEFAULT">Выберите категорию</option>
              <option value="MMO">MMO</option>
              <option value="MMORPG">MMORPG</option>
              <option value="Сингл">Cингл</option>
              <option value="Мультиплеер">Мультиплеер</option>
              <option value="MOBA">МOBA</option>
              <option value="Железо и софт">Железо и софт</option>
              <option value="Консоли">Консоли</option>
            </select>
          </div>

          <div className="input-field col s12 m6">
            <textarea id="author" onChange={onArticleChange} className="materialize-textarea" />
            <label  htmlFor="author">Имя автора</label>
          </div>
        </div>

        <div className="input-field center">
          <button type="submit" className="btn waves-effect waves-light blue"><i className="material-icons right">add</i>Опубликовать</button>
        </div>

      </div>
    </form>
  );
}
 
export default CreateArticle;