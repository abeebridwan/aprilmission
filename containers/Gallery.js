/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import GallerySec from '../components/gallery/index';
import { modalImgData, modalGalleryData } from '../fixtures/Data';

const GalleryContainer = ({ children }) => {
  const [slideIndex, setslideIndex] = useState(0);

  const openModal = () => {
    document.getElementById('myModal').style.display = 'flex';
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const { body } = document;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };

  const closeModal = () => {
    document.getElementById('myModal').style.display = 'none';
    const { body } = document;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  const showSlides = (Index) => {
    let slideIndex = Index;

    const slides = document.getElementsByClassName('ModalSlides');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      setslideIndex(0);
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      setslideIndex(slides.length - 1);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  };

  useEffect(() => {
    showSlides(slideIndex);
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
  });

  return (
    <GallerySec id="gallery">
      <GallerySec.Title>
        <div>Our Stories</div>
        <h2>Gallery</h2>
        <div />
      </GallerySec.Title>
      <GallerySec.Group>
        {modalGalleryData.map((item) => (
          <GallerySec.Item
            onClick={() => {
              openModal();
              setslideIndex(item.index);
            }}
            key={item.id}
            src={item.src}
            firstSrc={item.firstSrc}
            alt={item.alt}
          />
        ))}
      </GallerySec.Group>
      {children}

      <GallerySec.Modal
        id="myModal"
        onClick={() => {
          closeModal();
        }}
      >
        {modalImgData.map((item) => (
          <GallerySec.ModalContent
            className="ModalSlides fade"
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span
              onClick={() => {
                closeModal();
              }}
            >
              &times;
            </span>
            <GallerySec.ModalSlider>
              <GallerySec.ModalImg src={item.src} firstSrc={item.firstSrc} secondSrc={item.secondSrc} alt={item.alt} />
            </GallerySec.ModalSlider>
            <GallerySec.ModalLink
              onClick={() => {
                setslideIndex(slideIndex + 1);
              }}
              id="prev"
            >
              &#10094;
            </GallerySec.ModalLink>
            <GallerySec.ModalLink
              onClick={() => {
                setslideIndex(slideIndex + 1);
              }}
              id="next"
            >
              &#10095;
            </GallerySec.ModalLink>
          </GallerySec.ModalContent>
        ))}
      </GallerySec.Modal>
    </GallerySec>
  );
};

export default GalleryContainer;
