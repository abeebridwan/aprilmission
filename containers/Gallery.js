/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import GallerySec from '../components/gallery/index';

const GalleryContainer = ({ children }) => (
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
      <GallerySec.ModalContent>
        <span>&times;</span>
        <GallerySec.ModalSlider>
          <GallerySec.ModalImg />
        </GallerySec.ModalSlider>
        <GallerySec.ModalLink id="prev">&#10094;</GallerySec.ModalLink>
        <GallerySec.ModalLink id="next">&#10095;</GallerySec.ModalLink>
      </GallerySec.ModalContent>
    </GallerySec.Modal>
  </GallerySec>
);

export default GalleryContainer;
