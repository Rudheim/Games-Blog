import React from 'react';
import {Link, useLocation } from 'react-router-dom';

const AdminPanel = () => {

  let location = useLocation().pathname;

  return (
    location !== '/signin' && location !== '/createarticle' && location !== '/signup' && (
      <div className="col l3 hide-on-med-and-down">
        <div className="admin-panel">
          <div className="collection">
            <Link to="/createarticle" className="collection-item blue-text"><i className="material-icons left">add</i>Добавить новость</Link>
          </div>
        </div>
      </div>
      )
  );
}
 
export default AdminPanel;