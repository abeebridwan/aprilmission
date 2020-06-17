/* eslint-disable react/prop-types */
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

Slider.Image = function SliderImage({ src, firstSrc, secondSrc, ...restProps }) {
  return (
    <Image {...restProps}>
      <source media="(min-width:788px)" srcSet={secondSrc} />
      <source media="(min-width:415px)" srcSet={firstSrc} />
      <img src={src} alt="beautiful girl" />
    </Image>
  );
};

Slider.Text = function SliderText({ title, subTitle1, subTitle2, children, ...restProps }) {
  return (
    <Text {...restProps}>
      <Slider.Title>{title}</Slider.Title>
      <Slider.Title color="colored">Children</Slider.Title>
      <Slider.SubTitle>{subTitle1}</Slider.SubTitle>
      <Slider.SubTitle>{subTitle2}</Slider.SubTitle>
      <Slider.SubTitle>You can be satisfied by helping others</Slider.SubTitle>
      <Slider.Button>Donate Now!</Slider.Button>
      <Slider.Button>Know More</Slider.Button>
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

Slider.Button = function SliderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
