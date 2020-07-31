import React, { useEffect, useContext} from 'react';
import { ArticleContext } from '../../context/ArticlesContext';
import ArticleList from './ArticlesList';

  const ArticleDetails = (props) => {

     const {data} = useContext(ArticleContext)
     const article = props.location.state


  useEffect(() => {
      document.querySelector('#main_text').innerHTML = new DOMParser().parseFromString(article.main_text, "text/html").body.innerHTML
      window.scrollTo(0, 0);
  }, [article.main_text])

    return (
      <div className="col s12 l9 article-details">
        <h5>{article.title}</h5>
        <div className="article-divider"></div>
        <div className="row article-info">
          <div className="col s6 m3"><span className="grey-text"><i className="material-icons left">access_time</i>{article.date}</span></div>
          <div className="col s6 m3"><span className="grey-text"><i className="material-icons left">account_circle</i>{article.author}</span></div>
        </div>
        <img src={article.title_photo_url} alt=""/>
        <p>{article.first_para}</p>
        <p id="main_text"></p>
        <div>
          <span><i className="material-icons left red-text text-darken-4">label</i>{article.category}</span>
        </div>
        <div className="article-divider"></div>
        <h6>Смотрите также</h6>
        {data.filter(articles => {return articles.id !== article.id}).map(item => {
        return <ArticleList props={item} key={item.id} />})}
      </div>
    );
  }
   
  export default ArticleDetails;

  