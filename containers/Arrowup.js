/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import ArrowUp from '../components/arrowup/index';

const ArrowUpContainer = ({ children }) => {
  const scrollFunction = () => {
    const mybutton = document.getElementById('myBtn');
    if (document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) {
      mybutton.style.display = 'flex';
    } else {
      mybutton.style.display = 'none';
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    topFunction();
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
