import React from 'react';
import LatestNews from '../news/LatestNews'
import Newsfeed from '../news/Newsfeed';
import Categories from './Categories';
import AdminPanel from './AdminPanel';


const HomePage = () => {
  return (
    <div className="row">
      <div className="col s12 l9">
        <LatestNews />
        <Newsfeed />  
      </div>
      <Categories />
      <AdminPanel />
    </div>
  );
}
 
export default HomePage;