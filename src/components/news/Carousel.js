import React, { useState, useEffect } from 'react';
import M from "materialize-css";
import {Link} from 'react-router-dom';

const Carousel = ({props}) => {

  const [article, setArticle] = useState({});

  useEffect(() => {
    let carousel = document.querySelector('.carousel');
    M.Carousel.init(carousel, { fullWidth: true, indicators: false});
    const interval = setInterval(() => { M.Carousel.getInstance(carousel).next()}, [5000]);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setArticle(props)
  }, [props])

  return (
    <>
      <Link to={{ pathname:'/articles/' + article.id, state: article}} className="carousel-item">
        <img src={article.title_photo_url} alt="news" />
        <div className="news-info">
        <h6 className="white-text">{article.title}</h6>
        </div>  
      </Link>
    </>
  );
}
 
export default Carousel;