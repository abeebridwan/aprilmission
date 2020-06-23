/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '../components/modal/index';

export default function ModalContainer({ children }) {
  return (
    <Modal>
      <Modal.Content>
        <Modal.Header>we are good</Modal.Header>
        <Modal.Body>I am fine</Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
