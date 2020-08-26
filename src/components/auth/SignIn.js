import React, { useState } from 'react';
import {app} from '../config/FireBaseConfig';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

const auth = app.auth();

const cardVariants={
  hidden: { x: 1000, scale: 0 },
  visible: {  x: 0, scale: 1 , originY: 0, transition:{ duration: .5}},
  exit: { rotateY: 90, originZ: 0, transition:{ duration: .5}}
}

const SignIn = () => {

  let history = useHistory();

  const [userDet, setUserDet] = useState({});

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
    <motion.form variants={cardVariants} initial='hidden' animate='visible' className="container login-form" onSubmit={handleSubmit}>
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
    </motion.form>
   );
}
 
export default SignIn;