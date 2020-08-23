import React, { useContext } from 'react';
import LatestArticle from '../news/LatestArticle'
import Newsfeed from '../news/Newsfeed';
import { ArticleContext } from '../../context/ArticlesContext';
import Carousel from '../news/Carousel';
import Pagination from './Pagination';
import { useEffect } from 'react';


const HomePage = () => {

  const {data} = useContext(ArticleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    data.length ? (
      <div className="col s12 l9">
        <div className="carousel carousel-slider center">
        {data.slice(2, 7).map(article => { 
          return <Carousel props={article} key={article.id}/> })
        }
        </div>
        {data.map(article => {
         return article === data[0] ? 
            <LatestArticle props={article} key={article.id} />
           : 
            <Newsfeed props={article} key={article.id} />
        })}
        <Pagination />
      </div>
    ) : (
      <div className="center error">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
 
export default HomePage;