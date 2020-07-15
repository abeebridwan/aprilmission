/* eslint-disable react/prop-types */
import { Container, Title, Group, Item } from './styles/gallery';

const GallerySec = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

GallerySec.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

GallerySec.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

GallerySec.Item = ({ children, ...RestProps }) => (
  <Item {...RestProps}>
    <picture>
      <source media="(min-width:382px) and (max-width:510px)" srcSet="/medium-01.png" />
      <source media="(max-width:256px)" srcSet=" /medium-01.png" />
      <img src="/small-01.png" alt="Flowers" style={{ width: '100%', height: '100%' }} />
    </picture>

    {children}
  </Item>
);

export default GallerySec;
