import React from 'react';
import Navbar from './components/navbar/Navbar'
import HomePage from './components/dashboard/HomePage';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateArticle from './components/news/CreateArticle';
import ArticleDetails from './components/news/ArticleDetails';
import Categories from './components/dashboard/Categories'
import AdminPanel from './components/dashboard/AdminPanel'
import ArticleProvider from './context/ArticlesContext';
import UserProvider from './context/UserContext';


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ArticleProvider>
            <Navbar />
            <main className="container dashboard row">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/createarticle" component={CreateArticle} />
                <Route exact path="/articles/:article_id" component={ArticleDetails} />
              </Switch>
              <Categories />
              <AdminPanel />
            </main>
            <Footer />
          </ArticleProvider>
        </UserProvider>
      </BrowserRouter>
   </>
  );
}

export default App;
