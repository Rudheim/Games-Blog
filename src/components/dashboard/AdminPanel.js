import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArticleContext } from '../../context/ArticlesContext';
import { UserContext } from '../../context/UserContext';

const AdminPanel = () => {

  let location = useLocation().pathname;
  const {data} = useContext(ArticleContext);
  const {user} = useContext(UserContext);

  return (
    user.uid === 'RSZ5V4eKdXfPyy8YpDH3GS5yj5M2' && !!data.length && location !== '/signin' && location !== '/createarticle' && location !== '/signup' && (
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