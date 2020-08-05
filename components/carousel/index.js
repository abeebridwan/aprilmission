/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <span>
    <img height="260" style={{ padding: '10px 5px 10px 0' }} src="/001.png" onDragStart={handleDragStart} />
    <p>Emmanuel Ocheme</p>
    <h3>Chairman</h3>
  </span>,
  <span>
    <img height="260" style={{ padding: '10px 5px 10px 5px' }} src="/002.png" onDragStart={handleDragStart} />
    <p>Bridget Idoko</p>
    <h3>Member</h3>
  </span>,
  <span>
    <img height="260" style={{ padding: '10px 5px 10px 5px' }} src="/003.png" onDragStart={handleDragStart} />
    <p>Azumi Ahmed</p>
    <h3>Member</h3>
  </span>,
  <span>
    <img height="260" style={{ padding: '10px 0 10px 5px' }} src="/004.png" onDragStart={handleDragStart} />
    <p>FOI Initiative</p>
    <h3>Partner</h3>
  </span>,
];

const Gallery = () => (
  <AliceCarousel autoWidth mouseTracking items={items} ssrSilentMode swipeExtraPadding={0} swipeDelta={50} />
);
export default Gallery;
