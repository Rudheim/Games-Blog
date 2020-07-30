import React, { useEffect, useState } from 'react';
import { formatISO9075 } from 'date-fns';
import { Link } from 'react-router-dom';

const ArticleList = ({props}) => {

  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle({...props, date: formatISO9075(props.date.toDate())})
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