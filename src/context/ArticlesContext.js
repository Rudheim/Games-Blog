import React, { createContext, useState, useEffect } from 'react';
import { app } from '../components/config/FireBaseConfig'

export const ArticleContext = createContext();

const db = app.firestore();

const ArticleProvider = (props) => {
  
  const [data, setData] = useState([]);

  const [last, setLast] = useState([]);

  const [category, setCategory] = useState();

  useEffect(() => {
    loadHome()
    console.log('reload')
    // eslint-disable-next-line
  }, [category])

  const loadHome = () => {
    let homeDB = db.collection("articles")
    if(category){
      homeDB = db.collection("articles").where("category", "==", category)
      setCategory()
    }
    homeDB.orderBy("date", "desc").limit(7).onSnapshot(snapshot =>{
      setLast(snapshot.docs[snapshot.docs.length-1]);
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
    window.scrollTo(0, 0);
  }

  const handleNext = () => {
    let homeDB = db.collection("articles")
    if(category){
      homeDB = db.collection("articles").where("category", "==", category)
    }
    homeDB.orderBy("date", "desc").startAfter(last).limit(7)
    .onSnapshot(snapshot =>{
      setLast(snapshot.docs[snapshot.docs.length-1]);
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
    window.scrollTo(0, 0);
  }

  return (
    <ArticleContext.Provider value={{data, handleNext, loadHome, setCategory}}>
      {props.children}
    </ArticleContext.Provider>
  );
}
 
export default ArticleProvider;