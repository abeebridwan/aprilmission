/* eslint-disable react/prop-types */
import Image from 'next/image';
import { Container, Title, Group, Item, Pics, Modal, Slider, Content, Link } from './styles/gallery';

const GallerySec = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

GallerySec.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

GallerySec.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

GallerySec.Item = ({ src, firstSrc, alt, children, ...RestProps }) => (
  <Item {...RestProps}>
    <Image src={src} alt={alt} width={285} height={200} layout="responsive" quality={100} />
    {children}
  </Item>
);

GallerySec.Modal = ({ children, ...RestProps }) => <Modal {...RestProps}>{children}</Modal>;

GallerySec.ModalContent = ({ children, ...RestProps }) => <Content {...RestProps}>{children}</Content>;

GallerySec.ModalSlider = ({ children, ...RestProps }) => <Slider {...RestProps}>{children}</Slider>;

GallerySec.ModalImg = ({ src, firstSrc, secondSrc, alt, children, ...RestProps }) => (
  <Pics {...RestProps}>
    <picture>
      <source media="(min-width:1070px)" srcSet={secondSrc} />
      <source media="(min-width:650px)" srcSet={firstSrc} />
      <img src={src} alt={alt} style={{ display: 'block' }} />
    </picture>
    {children}
  </Pics>
);

GallerySec.ModalLink = ({ children, ...RestProps }) => <Link {...RestProps}>{children}</Link>;

export default GallerySec;
