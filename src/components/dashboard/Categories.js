import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArticleContext } from '../../context/ArticlesContext';

const Categories = () => {

  let location = useLocation().pathname;
  const {data, setCategory} = useContext(ArticleContext)

  return (
    !!data.length && location !== '/signin' && location !== '/createarticle' && location !== '/signup' && (
      <div className="col l3 hide-on-med-and-down">
        <div className="categories">
        <h6 className="white-text center">Категории</h6>
          <div className="collection">
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">MMO</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">MMORPG</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">Cингл</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">Мультиплеер</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">МOBA</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">Железо и софт</Link>
            <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item">Консоли</Link>
          </div>
        </div>
      </div>
    )
  );
}
 
export default Categories;