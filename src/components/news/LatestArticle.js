import React from 'react';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';


const LatestNews = ({article}) => {

  return (
    article !== undefined ? (
      
      <div className="card main-article">
          <div className="card-image">
            <img src={article.title_photo_url} alt='Главная новость' />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5>{article.title}</h5>
              <p className="grey-text">Автор: {article.author}</p>
              <p>{article.first_para}</p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s6 time">
                  <i className="material-icons left">access_time</i><span>{formatISO9075(article.date.toDate())}</span>
                </div>
                <div className="col s6 right-align read">
                <Link to={{
                  pathname:'/' + article.id,
                  state: {article}}}>
                  <i className="material-icons right">sort</i>Читать далее</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="center"><div className="lds-dual-ring"></div></div>
      )
    
  )
}
 
export default LatestNews;