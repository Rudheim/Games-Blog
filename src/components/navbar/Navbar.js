import React, {useEffect} from 'react';
import M from "materialize-css";
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';


 const Navbar = () => {

  useEffect(() => {

    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
  })

   return (
      <nav className="white">
        <a href='/' data-target="mobile_menu" className="sidenav-trigger grey-text text-darken-4 right"><i className="material-icons">menu</i></a>
        <div className="nav-wrapper container ">
          <a href='/' className="brand-logo left grey-text text-darken-4">Блеф</a>
          <ul className="right hide-on-med-and-down">
            <li><a href='/'>Новости</a></li>
            <li><a href='/'>Фото</a></li>
            <li><a href='/'>Видео</a></li>
            <li><a href='/'>О нас</a></li>
            <li><a href='/'>Контакты</a></li>
            <SignedOutLinks />
            <SignedInLinks />
          </ul>
        </div>
        <ul className="sidenav" id="mobile_menu">
          <li><a href='/'>Новости</a></li>
          <li className="no-padding">
            <ul className="collapsible">
            <li>
              <a className="collapsible-header">Категории</a>
              <div className="collapsible-body">
                <ul>
                  <li><a href='/'>Категория 1</a></li>
                  <li><a href='/'>Категория 2</a></li>
                  <li><a href='/'>Категория 3</a></li>
                  <li><a href='/'>Категория 4</a></li>
                  <li><a href='/'>Категория 5</a></li>
                  <li><a href='/'>Категория 6</a></li>
                </ul>
              </div>
              </li>
            </ul>
          </li>
            <li><a href='/'>Фото</a></li>
            <li><a href='/'>Видео</a></li>
            <li><a href='/'>О нас</a></li>
            <li><a href='/'>Контакты</a></li>
            <SignedOutLinks />
            <SignedInLinks />
          </ul>
      </nav>
   );
 }
  
 export default Navbar;