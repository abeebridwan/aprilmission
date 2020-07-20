/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import GallerySec from '../components/gallery/index';
import { modalImgData } from '../fixtures/Data';

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
        {modalImgData.map((item) => (
          <GallerySec.ModalContent className="ModalSlides fade">
            <span>&times;</span>
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
