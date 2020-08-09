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
              <div className="img">
                <img src="/001.png" alt="Chairman" />
              </div>
              <div className="info">
                <p>Emmanuel Ocheme</p>
                <h3>Chairman</h3>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">
                <img src="/002.png" alt="Member" />
              </div>
              <div className="info">
                <p>Bridget Idoko</p>
                <h3>Member</h3>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">
                <img src="/003.png" alt="Member" />
              </div>
              <div className="info">
                <p>Azumi Ahmed</p>
                <h3>Member</h3>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img">
                <img src="/004.png" alt="Partner" />
              </div>
              <div className="info">
                <p>FOI Initiative</p>
                <h3>Partner</h3>
              </div>
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
