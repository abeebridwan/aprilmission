/* eslint-disable react/prop-types */
import { Container, Title, Group, Item } from './styles/project';

const Project = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Project.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

Project.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

Project.Item = ({ children, ...RestProps }) => <Item {...RestProps}>{children}</Item>;

export default Project;
