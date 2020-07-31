import React, { useState } from 'react';
import {app} from '../config/FireBaseConfig';
import { useHistory } from "react-router-dom";

const auth = app.auth();

const SignIn = () => {

  const [userDet, setUserDet] = useState({})
  let history = useHistory();

  const handleChange= (e) =>{
    setUserDet({
      ...userDet,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(userDet.email, userDet.password)
      .then(cred => {
        setUserDet('');
        history.push('/');
      }).catch(err => console.log(err.message))
  }

  return ( 
    <form className="container login-form" onSubmit={handleSubmit}>
    <div className="center-align">
      <i className="material-icons large">account_circle</i>
      <h4>Вход</h4>
      <p className="grey-text">Если вы уже зарегистрированы, используйте существующе данные для входа</p>
    </div>
      <div className="input-field">
        <i className="material-icons prefix">email</i>
        <input id="email" type="email" className="validate" onChange={handleChange} />
        <label  htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <i className="material-icons prefix">https</i>
        <input id="password" type="password" className="validate" onChange={handleChange} />
        <label  htmlFor="password">Пароль</label>
      </div>
      <div className="input-field center">
        <button type="submit" className="btn waves-effect waves-light blue"><i className="material-icons right">chevron_right</i>Войти</button>
      </div>
    </form>
   );
}
 
export default SignIn;