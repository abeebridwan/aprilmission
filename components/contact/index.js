/* eslint-disable react/prop-types */
import { Container, Title, Frame } from './styles/contact';

const Contact = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Contact.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

Contact.Frame = ({ children, ...RestProps }) => <Frame {...RestProps}>{children}</Frame>;

export default Contact;
