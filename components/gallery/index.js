/* eslint-disable react/prop-types */
import { Container, Title, Group, Item } from './styles/gallery';

const GallerySec = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

GallerySec.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

GallerySec.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

GallerySec.Item = ({ children, ...RestProps }) => <Item {...RestProps}>{children}</Item>;

export default GallerySec;
