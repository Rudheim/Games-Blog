import React, { useContext } from 'react';
import { ArticleContext } from '../../context/ArticlesContext';
import { Link } from 'react-scroll'

const Pagination = () => {

  const {handleNext, data} = useContext(ArticleContext);

  return (
    <div className="page">
      {data.length >= 8 && <Link
      activeClass="active" 
      to="main-article" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={1000}
       className="next-btn" onClick={handleNext}><span>Дальше</span></Link> }
    </div>
  );
}
 
export default Pagination;