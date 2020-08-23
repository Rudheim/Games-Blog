import React, { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const LatestNews = ({props}) => {

  const [article, setArticle] = useState({});
  const {user} = useContext(UserContext);

  useEffect(() => {
    setArticle(props)
  }, [props])
  

  return (
      <div className="card main-article">
          <div className="card-image">
          {user.uid === 'RSZ5V4eKdXfPyy8YpDH3GS5yj5M2' && <Link to="/create-article" className="edit_icon btn-floating btn-small waves-effect waves-light blue"><i className="material-icons">edit</i></Link>}
            <img src={article.title_photo_url} alt='Главная новость' />
          </div>
          <div className="card-stacked">
            <div className="card-content">
            <Link to={{ pathname:'/articles/' + article.id,
                        state: article }}>
                  <h6>{article.title}</h6></Link>
              <p className="grey-text">Автор: {article.author}</p>
              <p>{article.first_para}</p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s6 time">
                  <i className="material-icons left">access_time</i><span>{article.date}</span>
                </div>
                <div className="col s6 right-align read">
                <Link to={{ pathname:'/articles/' + article.id,
                            state: article }}>
                  <i className="material-icons right">sort</i>Читать далее</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
 
export default LatestNews;