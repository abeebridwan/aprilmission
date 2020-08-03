/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToggleContext } from '../context/modal';
import Modal from '../components/modal/index';
import { ModalData } from '../fixtures/Data';

export default function ModalContainer({ children }) {
  const {
    ShowModal,
    setShowModal,
    aboutModal,
    setAboutModal,
    headerModal,
    sliderModal,
    setHeaderModal,
    setsliderModal,
    projectModal,
    setprojectModal,
    projecttwoModal,
    setprojecttwoModal,
  } = useContext(ToggleContext);

  useEffect(() => {
    if (ShowModal || aboutModal || headerModal || sliderModal || projectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
  return (
    <Modal
      onClick={() => {
        setShowModal(!ShowModal);
        setAboutModal(false);
        setHeaderModal(false);
        setsliderModal(false);
        setprojectModal(false);
        setprojecttwoModal(false);
      }}
    >
      <Modal.Content>
        <Modal.Header>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={() => {
              setShowModal(!ShowModal);
              setAboutModal(false);
              setHeaderModal(false);
              setsliderModal(false);
              setprojectModal(false);
              setprojecttwoModal(false);
            }}
          />
        </Modal.Header>
        <Modal.Body
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ModalData
            aboutModal={aboutModal}
            headerModal={headerModal}
            sliderModal={sliderModal}
            projectModal={projectModal}
            projecttwoModal={projecttwoModal}
          />
        </Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
