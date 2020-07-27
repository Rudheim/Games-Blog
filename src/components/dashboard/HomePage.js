import React, { useEffect, useState } from 'react';
import LatestArticle from '../news/LatestArticle'
import Newsfeed from '../news/Newsfeed';
import {app} from '../config/FireBaseConfig'

const db = app.firestore();

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("articles").orderBy("date", "desc").get().then(snapshot =>{
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
  }, [])

  return (
    data.length ? (
      <div className="col s12 l9">
        {data.map(article => {
         return article === data[0] ? (
            <LatestArticle article={article} key={article.id} />
          ) : (
            <Newsfeed article={article} key={article.id} />
          )
        })}  
      </div>
    ) : (
      <div className="col s12 l9">
        <div className="lds-dual-ring center-align">
          <h5 className="blue-text">Загрузка</h5>
        </div>
      </div>
    )
  );
}
 
export default HomePage;