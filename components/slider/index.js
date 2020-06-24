/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ToggleContext } from '../../context/modal';
import { Container, Slide, Text, Link, Number, Image, Dot, Span, Title, SubTitle, Button } from './styles/slider';

export default function Slider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Slider.Slide = function SliderSlide({ children, ...restProps }) {
  return <Slide {...restProps}>{children}</Slide>;
};

Slider.Number = function SliderNumber({ children, ...restProps }) {
  return <Number {...restProps}>{children}</Number>;
};

Slider.Image = function SliderImage({ src, firstSrc, secondSrc, alt, ...restProps }) {
  return (
    <Image {...restProps}>
      <source media="(min-width:788px)" srcSet={secondSrc} />
      <source media="(min-width:415px)" srcSet={firstSrc} />
      <img src={src} alt={alt} />
    </Image>
  );
};

Slider.Text = function SliderText({ title, subTitle1, subTitle2, children, ...restProps }) {
  const { ShowModal, setShowModal } = useContext(ToggleContext);
  return (
    <Text {...restProps}>
      <Slider.Title>{title}</Slider.Title>
      <Slider.Title color="colored">Children</Slider.Title>
      <Slider.SubTitle>{subTitle1}</Slider.SubTitle>
      <Slider.SubTitle>{subTitle2}</Slider.SubTitle>
      <Slider.SubTitle>You can be satisfied by helping others</Slider.SubTitle>
      <Slider.Button
        onClick={() => {
          setShowModal(!ShowModal);
        }}
      >
        Donate Now
      </Slider.Button>
      <Slider.Button bg="none">Know More</Slider.Button>
      {children}
    </Text>
  );
};

Slider.Link = function SliderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Slider.Dot = function SliderDot({ children, ...restProps }) {
  return <Dot {...restProps}>{children}</Dot>;
};

Slider.Span = function SliderSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Slider.Title = function SliderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Slider.SubTitle = function SliderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Slider.Button = function SliderButton({ header, children, ...restProps }) {
  return (
    <Button header={header} {...restProps}>
      {children}
    </Button>
  );
};
