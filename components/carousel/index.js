/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img style={{ padding: '3% 3% 3% 0' }} src="/chairman.jpg" onDragStart={handleDragStart} />,
  <img style={{ padding: '3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />,
  <img style={{ padding: '3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />,
  <img style={{ padding: '3% 0% 3% 3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />,
];

const Gallery = () => <AliceCarousel autoHeight autoWidth mouseTracking items={items} ssrSilentMode={false} />;
export default Gallery;
