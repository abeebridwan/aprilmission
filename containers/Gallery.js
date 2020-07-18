/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import GallerySec from '../components/gallery/index';

const GalleryContainer = ({ children }) => {
  const [slideIndex, setslideIndex] = useState(0);

  const showSlides = (Index) => {
    let slideIndex = Index;
    let i;
    const slides = document.getElementsByClassName('ModalSlides');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      setslideIndex(0);
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      setslideIndex(slides.length - 1);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  };

  useEffect(() => {
    showSlides(slideIndex);
  });

  return (
    <GallerySec id="gallery">
      <GallerySec.Title>
        <div>Our Stories</div>
        <h2>Gallery</h2>
        <div />
      </GallerySec.Title>
      <GallerySec.Group>
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
        <GallerySec.Item />
      </GallerySec.Group>
      {children}

      <GallerySec.Modal>
        <GallerySec.ModalContent className="ModalSlides">
          <span>&times;</span>
          <GallerySec.ModalSlider>
            <GallerySec.ModalImg src="/gallery/modal/big-01.png" />
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

        <GallerySec.ModalContent className="ModalSlides">
          <span>&times;</span>
          <GallerySec.ModalSlider>
            <GallerySec.ModalImg src="/gallery/modal/big-02.jpg" />
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

        <GallerySec.ModalContent className="ModalSlides">
          <span>&times;</span>
          <GallerySec.ModalSlider>
            <GallerySec.ModalImg src="/gallery/modal/big-01.png" />
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
      </GallerySec.Modal>
    </GallerySec>
  );
};

export default GalleryContainer;
