/* eslint-disable react/prop-types */
import Gallery from '../components/gallery/index';

const GalleryContainer = ({ children }) => (
  <Gallery id="gallery">
    <Gallery.Title>
      <div>Our Stories</div>
      <h2>Gallery</h2>
      <div />
    </Gallery.Title>
    <Gallery.Group>no shaking, almost there!</Gallery.Group>
    {children}
  </Gallery>
);

export default GalleryContainer;
