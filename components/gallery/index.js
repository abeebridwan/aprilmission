/* eslint-disable react/prop-types */
import { Container, Title, Group } from './styles/gallery';

const Gallery = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Gallery.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

Gallery.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

export default Gallery;
