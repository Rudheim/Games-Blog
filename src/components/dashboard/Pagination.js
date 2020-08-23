import React, { useContext } from 'react';
import { ArticleContext } from '../../context/ArticlesContext';

const Pagination = () => {

  const {handleNext, data} = useContext(ArticleContext);

  return (
    <div className="page">
      {data.length > 3 && <button className="next-btn" onClick={handleNext}><span>Дальше</span></button>}
    </div>
  );
}
 
export default Pagination;