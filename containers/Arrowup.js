/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useContext } from 'react';
import ArrowUp from '../components/arrowup/index';
import { ToggleContext } from '../context/modal';

const ArrowUpContainer = ({ children }) => {
  const { ShowModal } = useContext(ToggleContext);

  const scrollFunction = () => {
    const mybutton = document.getElementById('myBtn');
    const { body } = document;
    const b = body.getBoundingClientRect();
    const anchorBottom = b.bottom;
    const hideNow = Math.ceil(anchorBottom) - 100;

    if (document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) {
      mybutton.style.display = 'flex';
    } else {
      mybutton.style.display = 'none';
    }
    if (ShowModal) {
      mybutton.style.display = 'none';
    }
    if (hideNow <= window.innerHeight) {
      mybutton.style.display = 'none';
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    const mybutton = document.getElementById('myBtn');
    if (ShowModal) {
      mybutton.style.display = 'none';
    }

    window.onscroll = function () {
      scrollFunction();
    };
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
