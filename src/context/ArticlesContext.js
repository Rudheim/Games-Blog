import React, { createContext, useState, useEffect } from 'react';
import { app } from '../components/config/FireBaseConfig'

export const ArticleContext = createContext();

const db = app.firestore();

const ArticleProvider = (props) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("articles").orderBy("date", "desc")
    .onSnapshot(snapshot =>{
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
}, [])

  return (
    <ArticleContext.Provider value={{data}}>
      {props.children}
    </ArticleContext.Provider>
  );
}
 
export default ArticleProvider;