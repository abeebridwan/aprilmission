/* eslint-disable react/prop-types */
import { Container } from './styles/gallery';

const Gallery = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

export default Gallery;
