/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Container, Content, Header, Body } from './styles/modal';
import { ToggleContext } from '../../context/modal';

export default function Modal({ children, ...restProps }) {
  const { ShowModal } = useContext(ToggleContext);
  return (
    <Container showModal={ShowModal} {...restProps}>
      {children}
    </Container>
  );
}

Modal.Content = function ModalContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Modal.Header = function ModalHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Modal.Body = function ModalBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
