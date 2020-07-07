/* eslint-disable react/prop-types */
import { Container } from './styles/project';

const Project = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

export default Project;
