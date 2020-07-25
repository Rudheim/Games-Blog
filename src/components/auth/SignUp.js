import React from 'react';

const SignUp = () => {
  return ( 
    <form className="container login-form">
      <div className="center-align">
      <i className="material-icons large">assignment</i>
      <h4>Регистрация нового пользователя</h4>
      <p className="grey-text">Заполните пожалуйста все поля*</p>
    </div>

      <div className="input-field">
        <i className="material-icons prefix">account_circle</i>
        <input id="first_name" type="text" className="validate" />
        <label  htmlFor="first_name">Имя</label>
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
        <button className="btn waves-effect waves-light blue"><i className="material-icons right">done</i>Зарегистрироваться</button>
      </div>
    </form>
   );
}
 
export default SignUp;