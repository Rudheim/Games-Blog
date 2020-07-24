import React from 'react';
import Navbar from './components/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import Categories from './components/dashboard/Categories';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row dashboard">
          <Dashboard />
          <div className="col l3 hide-on-med-and-down">
            <div className="categories">
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <Footer />
   </>
  );
}

export default App;
