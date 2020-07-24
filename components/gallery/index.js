/* eslint-disable react/prop-types */
import { Container, Title, Group, Item, Image, Modal, Slider, Content, Link } from './styles/gallery';

const GallerySec = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

GallerySec.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

GallerySec.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

GallerySec.Item = ({ src, firstSrc, alt, children, ...RestProps }) => (
  <Item {...RestProps}>
    <picture>
      <source media="(min-width:382px) and (max-width:510px)" srcSet={firstSrc} />
      <source media="(max-width:256px)" srcSet={firstSrc} />
      <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
    </picture>

    {children}
  </Item>
);

GallerySec.Modal = ({ children, ...RestProps }) => <Modal {...RestProps}>{children}</Modal>;

GallerySec.ModalContent = ({ children, ...RestProps }) => <Content {...RestProps}>{children}</Content>;

GallerySec.ModalSlider = ({ children, ...RestProps }) => <Slider {...RestProps}>{children}</Slider>;

GallerySec.ModalImg = ({ src, firstSrc, secondSrc, alt, ...RestProps }) => (
  <Image {...RestProps}>
    <picture>
      <source media="(min-width:1070px)" srcSet={secondSrc} />
      <source media="(min-width:650px)" srcSet={firstSrc} />
      <img src={src} alt={alt} style={{ display: 'block' }} />
    </picture>
  </Image>
);

GallerySec.ModalLink = ({ children, ...RestProps }) => <Link {...RestProps}>{children}</Link>;

export default GallerySec;