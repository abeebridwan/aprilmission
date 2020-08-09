/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import React from 'react';

const Carousel = () => {
  let index = 0;

  const Next = () => {
    index++;
    const prev = document.querySelector('.Fprev');
    const next = document.querySelector('.Fnext');
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    console.log({ prev, next, carouselWidth });
    prev.style.display = 'block';
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

    if (track.offsetWidth - index * carouselWidth < carouselWidth) {
      next.style.display = 'none';
    }
  };

  const Prev = () => {
    index--;
    const prev = document.querySelector('.Fprev');
    const next = document.querySelector('.Fnext');
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    console.log({ prev, next, track, carouselWidth });
    next.style.display = 'block';
    if (index === 0) {
      prev.style.display = 'none';
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track">
          <div className="card-container">
            <div className="card">
              <div className="img">1</div>
              <div className="info">Title 1</div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">2</div>
              <div className="info">Title 2</div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">3</div>
              <div className="info">Title 3</div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">4</div>
              <div className="info">Title 4</div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <button className="Fprev" onClick={Prev}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button className="Fnext" onClick={Next}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
