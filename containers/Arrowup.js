/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import throttle from 'lodash/throttle';
import ArrowUp from '../components/arrowup/index';

const ArrowUpContainer = ({ children }) => {
  const scrollFunction = () => {
    const mybutton = document.getElementById('myBtn');
    const { body } = document;
    const b = body.getBoundingClientRect();
    const anchorBottom = b.bottom;
    const hitbottom = Math.ceil(anchorBottom) - 100;

    if (document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) {
      mybutton.style.display = 'flex';
    } else {
      mybutton.style.display = 'none';
    }
    if (hitbottom <= window.innerHeight) {
      mybutton.style.display = 'none';
    }
    if (window.innerWidth > 2000) {
      mybutton.style.display = 'none';
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.onscroll = throttle(() => {
      scrollFunction();
    }, 500);
  });
  return (
    <ArrowUp
      id="myBtn"
      onClick={() => {
        topFunction();
      }}
    >
      <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" />
      Top
      {children}
    </ArrowUp>
  );
};

export default ArrowUpContainer;
