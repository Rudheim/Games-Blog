import React, {useEffect} from 'react';
import M from "materialize-css";
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import {NavLink, Link} from 'react-router-dom'


 const Navbar = () => {

  useEffect(() => {

    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
  })

   return (
     <header>
      <nav className="white">
        <span data-target="mobile_menu" className="sidenav-trigger grey-text text-darken-4 right hide-on-large-only"><i className="material-icons">menu</i></span>
        <div className="nav-wrapper container ">
          <Link to='/' className="brand-logo left grey-text text-darken-4" >Блеф</Link>
          <ul className="right hide-on-med-and-down">
            <li><NavLink exact to='/' activeClassName="selected-nav">Новости</NavLink></li>
            <li><NavLink to='/'>Фото</NavLink></li>
            <li><NavLink to='/'>Видео</NavLink></li>
            <li><NavLink to='/'>О нас</NavLink></li>
            <li><NavLink to='/'>Контакты</NavLink></li>
            <li className="nav-divider"></li>
            <SignedOutLinks />
            <SignedInLinks />
          </ul>
        </div>
        <ul className="sidenav" id="mobile_menu">
          <li><Link to='/'>Новости</Link></li>
          <li className="no-padding">
            <ul className="collapsible">
            <li>
              <span className="collapsible-header">Категории</span>
              <div className="collapsible-body">
                <ul>
                  <li><NavLink to='/'>Категория 1</NavLink></li>
                  <li><NavLink to='/'>Категория 2</NavLink></li>
                  <li><NavLink to='/'>Категория 3</NavLink></li>
                  <li><NavLink to='/'>Категория 4</NavLink></li>
                  <li><NavLink to='/'>Категория 5</NavLink></li>
                  <li><NavLink to='/'>Категория 6</NavLink></li>
                </ul>
              </div>
              </li>
            </ul>
          </li>
            <li><NavLink to='/'>Фото</NavLink></li>
            <li><NavLink to='/'>Видео</NavLink></li>
            <li><NavLink to='/'>О нас</NavLink></li>
            <li><NavLink to='/'>Контакты</NavLink></li>
            <SignedOutLinks />
            <SignedInLinks />
          </ul>
      </nav>
      </header>
   );
 }
  
 export default Navbar;