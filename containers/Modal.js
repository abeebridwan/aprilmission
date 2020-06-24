/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToggleContext } from '../context/modal';
import Modal from '../components/modal/index';

export default function ModalContainer({ children }) {
  const { ShowModal, setShowModal } = useContext(ToggleContext);
  return (
    <Modal>
      <Modal.Content>
        <Modal.Header>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={() => {
              setShowModal(!ShowModal);
            }}
          />
        </Modal.Header>
        <Modal.Body>I am fine</Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
