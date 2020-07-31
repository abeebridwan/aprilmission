/* eslint-disable react/prop-types */
import { Container } from './styles/footer';

const Footer = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

export default Footer;
