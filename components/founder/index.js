/* eslint-disable react/prop-types */
import { Container } from './styles/founder';

const Founder = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

export default Founder;
