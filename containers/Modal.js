/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/modal/index';

export default function ModalContainer({ children }) {
  return (
    <Modal>
      <Modal.Content>
        <Modal.Header>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Modal.Header>
        <Modal.Body>I am fine</Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
