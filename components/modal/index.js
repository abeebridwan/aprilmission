/* eslint-disable react/prop-types */
import { Container, Content, Header, Body } from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
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
