/* eslint-disable react/prop-types */
import { Container, Content, Video } from './styles/about';

const About = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

About.Content = ({ children, ...RestProps }) => <Content {...RestProps}>{children}</Content>;

About.Video = ({ children, ...RestProps }) => <Video {...RestProps}>{children}</Video>;

export default About;
