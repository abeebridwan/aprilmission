import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
  <img alt="girl" src="/slide_3-small.jpg" onDragStart={handleDragStart} />,
];

const Gallery = () => (
  <AliceCarousel mouseTracking items={items} autoHeight autoWidth activeIndex={0} autoPlayControls keyboardNavigation />
);

export default Gallery;
