import React from 'react';
import {Link} from 'react-router-dom'

const AdminPanel = () => {
  return ( 
    <div className="col l3 hide-on-med-and-down">
      <div className="admin-panel">
        <div className="collection">
          <Link to="/createarticle" className="collection-item blue-text"><i className="material-icons left">add</i>Добавить новость</Link>
        </div>
      </div>
    </div>
  );
}
 
export default AdminPanel;