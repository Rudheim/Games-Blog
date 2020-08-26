import React, { useContext } from 'react';
import { ArticleContext } from '../../context/ArticlesContext';
import { Link } from 'react-router-dom';

const CategoriyNavigation = () => {

  const {setCategory} = useContext(ArticleContext)
  
  return (
    <div className="collection">
    <Link to="/"  onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">MMO</Link>
    <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">MMORPG</Link>
    <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">Сингл</Link>
    <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">Мультиплеер</Link>
    <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">MOBA</Link>
    <Link to="/" onClick={(e) => {setCategory(e.target.textContent)}} className="collection-item sidenav-close">Железо и софт</Link>
  </div>
  );
}
 
export default CategoriyNavigation;