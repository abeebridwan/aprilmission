/* eslint-disable react/prop-types */
import { Container, Title, Group, SmallGroup } from './styles/contact';

const Contact = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Contact.Title = ({ children, ...RestProps }) => <Title {...RestProps}>{children}</Title>;

Contact.Group = ({ children, ...RestProps }) => <Group {...RestProps}>{children}</Group>;

Contact.SmallGroup = ({ children, ...RestProps }) => <SmallGroup {...RestProps}>{children}</SmallGroup>;

export default Contact;
