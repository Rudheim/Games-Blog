import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container grey darken-4">
        <div className="row">
          <div className="col l6 m6 s12 contacts">
            <h5 className="white-text">Контакты:</h5>
            <p className="grey-text text-lighten-4">Тел. +38 (067) 123 4567</p>
            <p className="grey-text text-lighten-4">Тел. +38 (096) 765 4321</p>
            <p className="grey-text text-lighten-4">Email: moyapochta@blef.com.ua</p>
            <p className="grey-text text-lighten-4">ул. Иванова 43 г. Житомир, 101111</p>
          </div>
          <div className="col l4 m6 offset-l2 s12">
            <h5 className="white-text">Мы в социальных сетях:</h5>
            <ul className="social-list">
             <a href="www.twitter.com"><i className="fab fa-twitter-square"></i></a>
             <a href="www.facebook.com"><i className="fab fa-facebook-square"></i></a>
             <a href="www.telegram.com"><i className="fab fa-telegram-plane"></i></a>
             <a href="www.viber.com"><i className="fab fa-viber"></i></a>
             <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
             <a href="www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright black">
        <div className="container center ">
          <span>&copy; 2020 .netHeim</span>
        </div>
      </div>
    </footer>);
}
 
export default Footer;