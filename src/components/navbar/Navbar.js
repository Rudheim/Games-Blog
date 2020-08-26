import React, {useEffect, useContext} from 'react';
import M from "materialize-css";
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { Link, useLocation} from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { ArticleContext } from '../../context/ArticlesContext';
import CategoriyNavigation from '../dashboard/CategoryNavigation';


 const Navbar = () => {

  const location = useLocation();

  const {user} = useContext(UserContext);
  const {setCategory} = useContext(ArticleContext)

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {preventScrolling: true});
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
  }, []);

  const handleClick = () => {
    setCategory('');
    if(location.pathname === "/"){
      window.location.reload();
    }
  }

   return (
     <header>
      <nav className="white">
        <span data-target="mobile_menu" className="sidenav-trigger grey-text text-darken-4 right hide-on-large-only"><i className="material-icons">menu</i></span>
        <div className="nav-wrapper container ">
          <Link to='/' onClick={handleClick} className="brand-logo left black-text" >Games Blog</Link>
          <ul className="right hide-on-med-and-down">
            {user.logged ? <SignedInLinks /> : <SignedOutLinks />}
          </ul>
        </div>
        <ul className="sidenav" id="mobile_menu">
          <CategoriyNavigation />
          <div className="nav-divider"></div>
          <div className="links">
           {user.logged ? <SignedInLinks /> : <SignedOutLinks />}
          </div>
        </ul>
      </nav>
      </header>
   );
 }
  
 export default Navbar;