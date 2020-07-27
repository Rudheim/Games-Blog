  // useEffect(() => {
  //   if(article !== undefined){
  //     // let doc = new DOMParser().parseFromString(article.first_para, "text/html").body.innerHTML
  //     // document.querySelector('#test').innerHTML = doc
  //   }
  // })

  import React from 'react';

  const ArticleDetails = (props) => {
    const article = props.location.state.article;
    return (
      <div className="col s12 l9">
        <img src={article.title_photo_url} alt=""/>
        <p>{article.title}</p>
        <p>{article.author}</p>
        <p>{article.first_para}</p>
        <p>{article.main_text}</p>
      </div>
    );
  }
   
  export default ArticleDetails;