/* eslint-disable react/prop-types */
import Contact from '../components/contact/index';

const ContactContainer = ({ children }) => (
  <Contact id="contact">
    <Contact.Title>
      <div>Get in Touch</div>
      <h2>Contact</h2>
      <div />
    </Contact.Title>
    <Contact.SmallGroup>i am the f small group</Contact.SmallGroup>
    <Contact.SmallGroup>i am the s small group</Contact.SmallGroup>
    {children}
  </Contact>
);

export default ContactContainer;
