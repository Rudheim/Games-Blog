import React, { useState } from 'react';
import {app} from '../config/FireBaseConfig'

const db = app.firestore();
const storage = app.storage();

const CreateArticle = () => {

  const [newArticle, setNewArticle] = useState();
  const [titlePhoto, setTitlePhoto] = useState({
    file: '',
    url: ''
  });

  const onArticleChange = (e) =>{
    setNewArticle({
      ...newArticle,
      [e.target.id]: e.target.value
    })
  }

  const onFileChange = (e) => {
    setTitlePhoto({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])})
  }

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();

      const storageRef = storage.ref();
      const fileRef = storageRef.child(titlePhoto.file.name);
      await fileRef.put(titlePhoto.file)

      db.collection("articles").doc().set({
        ...newArticle,
        title_photo_url: await fileRef.getDownloadURL()
      })
      .then(() => {
        console.log('Новая статья добавлена')
      }).catch((err) => {
        console.log('Ошибка: ' + err.message)
      })
    } catch (error) {
      console.log('Ошибка загрузки фото: ' + error.message)
    }
  }

  return (  
    <form className="container create-form row" onSubmit={handleSubmit}>
      <div className="col s12 m4">
        <div className=" file-field input-field">
          <div className="btn-small">
            <span>Фото в заглавие</span>
            <input type="file" className="" onChange={onFileChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
          <img src={titlePhoto.url} alt=""/>
        </div>
      </div>
      <div className="col s12 m8">
        <div className="input-field">
          <textarea id="title" onChange={onArticleChange} className="materialize-textarea" />
          <label  htmlFor="title">Заглавие</label>
        </div>
        <div className="input-field">
          <textarea id="first_para" onChange={onArticleChange} className="materialize-textarea" />
          <label  htmlFor="first_para">Первый параграф (Будет отображаться в новостной ленте)</label>
        </div>
        <div className="input-field">
          <textarea id="main_text" onChange={onArticleChange} className="materialize-textarea" />
          <label  htmlFor="main_text">Основной текст</label>
        </div>
        <div className="input-field center">
          <button type="submit" className="btn waves-effect waves-light blue"><i className="material-icons right">add</i>Опубликовать</button>
        </div>
      </div>
    </form>
  );
}
 
export default CreateArticle;