import React from 'react';

const LatestNews = () => {
  return (
    <div className="card main-article">
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg" alt='Главная новость' />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h4>Главная новость</h4>
          <p className="grey-text">Автор: Василий Иванов</p>
          <p>I am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto optio, dolor nulla aliquid quae quasi sequi debitis voluptatum, sunt ipsa eum repellat voluptatibus. </p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 time">
              <i className="material-icons left">access_time</i><span>Час назад</span>
            </div>
            <div className="col s6 right-align read">
              <a href="/"><i className="material-icons right">sort</i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default LatestNews;