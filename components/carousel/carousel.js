/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSwipeable } from 'react-swipeable';

const Carousel = () => {
  let index = 0;

  const Next = () => {
    const prev = document.querySelector('.Fprev');
    const next = document.querySelector('.Fnext');
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    prev.style.display = 'block';

    if ((index + 1) * 233 >= track.offsetWidth - carouselWidth) {
      index++;
      track.style.transform = `translateX(-${track.offsetWidth - carouselWidth}px)`;
      next.style.display = 'none';
    } else {
      index++;
      track.style.transform = `translateX(-${index * 233}px)`;
    }
  };
  const mobileNext = () => {
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    const prev = document.querySelector('.Fprev');
    const next = document.querySelector('.Fnext');
    const x = window.matchMedia('(min-width: 768px) and (min-height: 768px)');

    /* this helps locate carouse
    first condition - anytime the after a swipe, a the current index * card container width is 
    greater than or equal to total track width minus the carousel container width minus 
    card container padding (the beginning of the last view value).
    
    that if the perfect last view value  on the track (incase the carousel container is a multiple of 233)
    (not perfect until index reaches its final value), is greater than or equal to the beginning of the last view value

    second condition: last carousel movement to the right end

    third condition: others situations/ main movevement
    */

    if (index * 233 >= track.offsetWidth - carouselWidth - 15) {
      if (x.matches) {
        // If media query matches
        prev.style.display = 'none';
        next.style.display = 'block';
        console.log('working');
      }
      index = 0;
      track.style.transform = `translateX(${0}px)`;
    } else if ((index + 1) * 233 >= track.offsetWidth - carouselWidth) {
      index++;
      track.style.transform = `translateX(-${track.offsetWidth - carouselWidth}px)`;
    } else {
      index++;
      track.style.transform = `translateX(-${index * 233}px)`;
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

    if (index === -1) {
      track.style.transform = `translateX(-${track.offsetWidth - carouselWidth}px)`;
      index = Math.floor((track.offsetWidth - carouselWidth) / 233 + 1);
      return;
    }
    track.style.transform = `translateX(-${index * 233}px)`;
  };

  const mobilePrev = () => {
    index--;
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    const prev = document.querySelector('.Fprev');
    const next = document.querySelector('.Fnext');
    const x = window.matchMedia('(min-width: 768px) and (min-height: 768px)');
    if (index === -1) {
      if (x.matches) {
        // If media query matches
        prev.style.display = 'block';
        next.style.display = 'none';
      }
      track.style.transform = `translateX(-${track.offsetWidth - carouselWidth}px)`;
      index = Math.floor((track.offsetWidth - carouselWidth) / 233 + 1);
      return;
    }
    track.style.transform = `translateX(-${index * 233}px)`;
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => mobileNext(),
    onSwipedRight: () => mobilePrev(),
  });

  return (
    <div {...handlers}>
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
    </div>
  );
};

export default Carousel;
