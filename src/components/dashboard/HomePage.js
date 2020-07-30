import React, { useEffect, useContext } from 'react';
import LatestArticle from '../news/LatestArticle'
import Newsfeed from '../news/Newsfeed';
import {app} from '../config/FireBaseConfig'
import { ArticleContext } from '../../context/ArticlesContext';

const db = app.firestore();

const HomePage = () => {

  const {data, setData} = useContext(ArticleContext);
  
  useEffect(() => {
    console.log('request!')
    db.collection("articles").orderBy("date", "desc").get()
      .then(snapshot =>{
        const tempArticles = [];
        snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
        setData(tempArticles)
    }).catch(err => {
        console.log(err.message)})
  }, [setData])
  
  return (
    data.length ? (
      <div className="col s12 l9">
        {data.map(article => {
         return article === data[0] ? (
            <LatestArticle props={article} key={article.id} />
          ) : (
            <Newsfeed props={article} key={article.id} />
          )
        })}  
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