import React, { useEffect, useLayoutEffect, useState } from 'react';

const Newsfeed = () => {

  const [browserSize, setBrowserSize] = useState('horizontal')

  useEffect(() => {
    window.innerWidth < 750 ? setBrowserSize('') : setBrowserSize('horizontal');
    window.addEventListener('resize', () => {
      window.innerWidth < 750 ? setBrowserSize('') : setBrowserSize('horizontal');
    });
  })

  return (
    <>
    <div className={`card ${browserSize}`}>
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h4>Главная новsfsdf sdfs sdf ость</h4>
          <p className="grey-text">Автор: Василий Иванов</p>
          <p>I am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores es asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto optio, dolor nulla aliquid quae quasi sequi debitis voluptatum, sunt ipsa  </p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 time">
              <span><i className="material-icons left">access_time</i>Час назад</span>
            </div>
            <div className="col s6 right-align read">
              <a href="/"><i className="material-icons right">sort</i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`card ${browserSize}`}>
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h4>Главная новsfsdf sdfs sdf ость</h4>
          <p className="grey-text">Автор: Василий Иванов</p>
          <p>I am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores es asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto optio, dolor nulla aliquid quae quasi sequi debitis voluptatum, sunt ipsa  </p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 time">
              <span><i className="material-icons left">access_time</i>Час назад</span>
            </div>
            <div className="col s6 right-align read">
              <a href="/"><i className="material-icons right">sort</i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className={`card ${browserSize}`}>
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h4>Главная новsfsdf sdfs sdf ость</h4>
          <p className="grey-text">Автор: Василий Иванов</p>
          <p>I am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores es asperiores architecto opI am a very simple card. I am good at containing small bits of information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe consequuntur explicabo mollitia dolores asperiores architecto optio, dolor nulla aliquid quae quasi sequi debitis voluptatum, sunt ipsa  </p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6 time">
              <span><i className="material-icons left">access_time</i>Час назад</span>
            </div>
            <div className="col s6 right-align read">
              <a href="/"><i className="material-icons right">sort</i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default Newsfeed;