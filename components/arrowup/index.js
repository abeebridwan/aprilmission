/* eslint-disable react/prop-types */
import { Container } from './styles/arrowup';

const ArrowUp = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

export default ArrowUp;
