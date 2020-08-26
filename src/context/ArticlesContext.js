import React, { createContext, useState, useEffect } from 'react';
import { app } from '../components/config/FireBaseConfig';
import { animateScroll as scroll } from 'react-scroll'

export const ArticleContext = createContext();

const db = app.firestore();

const ArticleProvider = (props) => {
  
  const [data, setData] = useState([]);

  const [last, setLast] = useState([]);

  const [category, setCategory] = useState();

  const [hotNews, setHotNews] = useState();

  useEffect(() => {
    db.collection("articles").where("hot", "==", true).limit(5).onSnapshot(snapshot =>{ 
      const tempHotArticles = [];
      snapshot.docs.forEach(doc => tempHotArticles.push({...doc.data(), id: doc.id}))
      setHotNews(tempHotArticles)
    })
    console.log('reload')
  }, [])

  useEffect(() => {
    let homeDB = db.collection("articles")
    if(category){
      homeDB = db.collection("articles").where("category", "==", category)
    }
    homeDB.orderBy("date", "desc").limit(8).onSnapshot(snapshot =>{
      setLast(snapshot.docs[snapshot.docs.length-1]);
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
    scroll.scrollToTop()
  }, [category])

  const handleNext = () => {
    let homeDB = db.collection("articles")
    if(category){
      homeDB = db.collection("articles").where("category", "==", category)
    }
    homeDB.orderBy("date", "desc").startAfter(last).limit(8)
    .onSnapshot(snapshot =>{
      setLast(snapshot.docs[snapshot.docs.length-1]);
      const tempArticles = [];
      snapshot.docs.forEach(doc => tempArticles.push({...doc.data(), id: doc.id}))
      setData(tempArticles)
    })
  }

  return (
    <ArticleContext.Provider value={{data, handleNext, setCategory, category, hotNews}}>
      {props.children}
    </ArticleContext.Provider>
  );
}
 
export default ArticleProvider;