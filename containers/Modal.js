/* eslint-disable react/jsx-one-expression-per-line */
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
        <Modal.Body>
          <div>
            <pre>
              <em>Together We are making a difference!</em>
            </pre>
            <h3>Account Information</h3>
            <dl>
              <dt>
                <strong>Account Name:</strong>
              </dt>
              <dd>April Mission Foundation</dd>
              <dt>
                <strong>Account Number: </strong>
              </dt>
              <dd>1023939955</dd>
              <dt>
                <strong>Account Bank: </strong>
              </dt>
              <dd>UBA</dd>
            </dl>

            <p>
              With deepest gratitude and warmest wishes, We thank you on behalf of all the children that your donation
              will impact.
            </p>
            <br />
            <p>
              <em>
                Note: We are currently unable to take payment directly online, and we are working to make that possible.
                Thank you for your patience
              </em>
            </p>
          </div>
        </Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
