/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Slider from '../components/slider/index';
import sliderData from '../fixtures/sliderData';
import dotNumbers from '../fixtures/dotNumber';

export default function SliderContainer() {
  const [slideIndex, setslideIndex] = useState(0);

  function showSlides(Index) {
    let slideIndex = Index;
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
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
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  }

  useEffect(() => {
    showSlides(slideIndex);
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => setslideIndex(slideIndex - 1),
    onSwipedRight: () => setslideIndex(slideIndex + 1),
  });

  return (
    <div {...handlers} style={{ position: 'relative' }}>
      <Slider>
        {sliderData.map((item) => (
          <Slider.Slide className="mySlides fade" key={item.id}>
            <Slider.Image src={item.src} firstSrc={item.firstSrc} secondSrc={item.secondSrc} alt={item.alt} />
            <Slider.Text title={item.title} subTitle1={item.SubTitle1} subTitle2={item.SubTitle2} />
          </Slider.Slide>
        ))}
        <Slider.Link
          className="prev"
          onClick={() => {
            setslideIndex(slideIndex - 1);
          }}
        >
          &#10094;
        </Slider.Link>
        <Slider.Link
          className="next"
          onClick={() => {
            setslideIndex(slideIndex + 1);
          }}
        >
          &#10095;
        </Slider.Link>
      </Slider>
      <Slider.Dot>
        {dotNumbers.map((item) => (
          <Slider.Span
            className="dot"
            key={item.id}
            onClick={() => {
              setslideIndex(item.num);
            }}
          />
        ))}
      </Slider.Dot>
    </div>
  );
}
