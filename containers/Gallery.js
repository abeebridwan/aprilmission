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

    <GallerySec.Modal>
      <span>&times;</span>
      <GallerySec.ModalContent>
        <GallerySec.ModalSlider>
          <GallerySec.ModalImg />
        </GallerySec.ModalSlider>
      </GallerySec.ModalContent>
      <GallerySec.ModalLink>&#10094;</GallerySec.ModalLink>
      <GallerySec.ModalLink>&#10095;</GallerySec.ModalLink>
    </GallerySec.Modal>
  </GallerySec>
);

export default GalleryContainer;
