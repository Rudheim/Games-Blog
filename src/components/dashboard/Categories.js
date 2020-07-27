import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Categories = () => {

  let location = useLocation().pathname;

  return (
    location !== '/signin' && location !== '/createarticle' && location !== '/signup' && (
      <div className="col l3 hide-on-med-and-down">
        <div className="categories">
          <div className="collection">
            <Link to="/" className="collection-item"><span className="badge">15</span><i className="material-icons left">accessibility</i>Категория 1</Link>
            <Link to="/" className="collection-item"><span className="badge">14</span><i className="material-icons left">airport_shuttle</i>Категория 2</Link>
            <Link to="/" className="collection-item"><span className="badge">41</span><i className="material-icons left">attach_money</i>Категория 3</Link>
            <Link to="/" className="collection-item"><span className="badge">32</span><i className="material-icons left">build</i>Категория 4</Link>
            <Link to="/" className="collection-item"><span className="badge">44</span><i className="material-icons left">card_travel</i>Категория 5</Link>
            <Link to="/" className="collection-item"><span className="badge">16</span><i className="material-icons left">local_hospital</i>Категория 6</Link>
          </div>
        </div>
      </div>
    )
  );
}
 
export default Categories;