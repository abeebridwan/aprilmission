/* eslint-disable react/prop-types */
import { Container, Title } from './styles/founder';

const Founder = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Founder.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

export default Founder;
