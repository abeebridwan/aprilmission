/* eslint-disable react/prop-types */
import GallerySec from '../components/gallery/index';

const GalleryContainer = ({ children }) => (
  <GallerySec id="gallery">
    <GallerySec.Title>
      <div>Our Stories</div>
      <h2>Gallery</h2>
      <div />
    </GallerySec.Title>
    <GallerySec.Group>
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
      <GallerySec.Item />
    </GallerySec.Group>
    {children}
  </GallerySec>
);

export default GalleryContainer;
