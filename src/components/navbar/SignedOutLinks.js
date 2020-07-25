import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="sign-out-links">
      <li><NavLink to='/signin' activeClassName="selected-nav">Войти</NavLink></li>
      <li><NavLink  to='/signup' activeClassName="selected-nav">Регистрация</NavLink></li>
    </ul>
  );
}
 
export default SignedOutLinks;