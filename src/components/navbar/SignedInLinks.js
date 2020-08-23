import React, { useContext} from 'react';
import {app} from '../config/FireBaseConfig';
import {NavLink} from 'react-router-dom'
import { UserContext } from '../../context/UserContext';

const auth = app.auth();

const SignedInLinks = () => {

  const {user} = useContext(UserContext)

  return (
    <ul className="sign-in-links">
      <li><span>{user.email}</span></li>
      <li onClick={() => {auth.signOut()}} ><NavLink to='/'><i className="material-icons right">exit_to_app</i>Выход</NavLink></li>
    </ul>
  );
}
 
export default SignedInLinks;