import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

const ArticleProvider = (props) => {

  const [data, setData] = useState([]);

  return (
    <ArticleContext.Provider value={{data, setData}}>
      {props.children}
    </ArticleContext.Provider>
  );
}
 
export default ArticleProvider;