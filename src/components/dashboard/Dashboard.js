import React from 'react';
import LatestNews from '../news/LatestNews'
import Newsfeed from '../news/Newsfeed';

const Dashboard = () => {
  return (
    <div className="col s12 l9">
      <LatestNews />
      <Newsfeed />
    </div>
  );
}
 
export default Dashboard;