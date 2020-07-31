import React, { createContext, useState, useEffect } from 'react';
import {app} from '../components/config/FireBaseConfig';

const auth = app.auth();


export const UserContext = createContext();

const UserProvider = (props) => {
  
  const [user, setUser] = useState({logged: false});

  useEffect(() => {
    auth.onAuthStateChanged(user => {      
      user ? setUser({logged: true, uid: user.uid, email: user.email}) : setUser({logged: false})
    })
  }, []) 

  return (
    <UserContext.Provider value={{user}}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserProvider;