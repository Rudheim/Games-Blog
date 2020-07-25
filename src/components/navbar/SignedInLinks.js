import React from 'react';

const SignedInLinks = () => {
  return (
    <ul className="sign-in-links">
      <li><span>Привет, Пользователь</span></li>
      <li><a href='/'><i className="material-icons right">exit_to_app</i>Выход</a></li>
    </ul>
  );
}
 
export default SignedInLinks;