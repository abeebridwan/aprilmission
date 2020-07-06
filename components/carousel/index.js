/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <span>
    <img style={{ padding: '3% 3% 3% 0' }} src="/chairman.jpg" onDragStart={handleDragStart} />
    <p>Emmanuel Ocheme</p>
    <h3>Chairman</h3>
  </span>,
  <span>
    <img style={{ padding: '3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />
    <p>Bridget Idoko</p>
    <h3>Member</h3>
  </span>,
  <span>
    <img style={{ padding: '3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />
    <p>Azumi Ahmed</p>
    <h3>Member</h3>
  </span>,
  <span>
    <img style={{ padding: '3% 0% 3% 3%' }} src="/chairman.jpg" onDragStart={handleDragStart} />
    <p>FOI Initiative</p>
    <h3>Partner</h3>
  </span>,
];

const Gallery = () => (
  <AliceCarousel animationDuration={600} autoWidth mouseTracking items={items} ssrSilentMode={false} />
);
export default Gallery;
