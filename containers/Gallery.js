/* eslint-disable react/prop-types */
import Gallery from '../components/gallery/index';

const GalleryContainer = ({ children }) => (
  <Gallery>
    i am working
    {children}
  </Gallery>
);

export default GalleryContainer;
