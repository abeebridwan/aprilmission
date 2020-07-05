/* eslint-disable react/prop-types */
import { Container, Title, Frame } from './styles/founder';

const Founder = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Founder.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

Founder.Frame = ({ children, ...RestProps }) => <Frame {...RestProps}>{children}</Frame>;

export default Founder;
