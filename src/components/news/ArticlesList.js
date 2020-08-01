import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({props}) => {

  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle(props)
  }, [props])

  return (
    <div>
        <Link to={{
          pathname:'/articles/' + article.id,
          state: article}}>
        {article.title}</Link>
    </div>
  );
}
 
export default ArticleList;