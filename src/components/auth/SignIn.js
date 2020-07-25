import React from 'react';

const SignIn = () => {
  return ( 
    <form className="container login-form">
    <div className="center-align">
      <i className="material-icons large">account_circle</i>
      <h4>Вход</h4>
      <p className="grey-text">Если вы уже зарегистрированы, используйте существующе данные для входа</p>
    </div>
      <div className="input-field">
        <i className="material-icons prefix">email</i>
        <input id="email" type="email" className="validate" />
        <label  htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <i className="material-icons prefix">https</i>
        <input id="password" type="password" className="validate" />
        <label  htmlFor="password">Пароль</label>
      </div>
      <div className="input-field center">
        <button className="btn waves-effect waves-light blue"><i className="material-icons right">chevron_right</i>Войти</button>
      </div>
    </form>
   );
}
 
export default SignIn;