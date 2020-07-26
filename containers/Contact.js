/* eslint-disable react/prop-types */
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contact from '../components/contact/index';

const ContactContainer = ({ children }) => (
  <Contact id="contact">
    <Contact.Title>
      <div>Get in Touch</div>
      <h2>Contact</h2>
      <div />
    </Contact.Title>
    <Contact.Group>
      <Contact.SmallGroup>
        <h2>Contact Details</h2>
        <p>Get in touch with us. Visit, call or fill the form and we would be in touch.</p>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          No. 9b-club road, jos, plateau state, Nigeria
        </div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          +2347065654046
        </div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          +2347039366568
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          aprilmssn@gmail.com
        </div>
        <h2>Follow Us</h2>
        <span>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </span>
        <span>
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </span>
        <span>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </span>
      </Contact.SmallGroup>
      <Contact.SmallGroup>i am the s small group</Contact.SmallGroup>
    </Contact.Group>
    {children}
  </Contact>
);

export default ContactContainer;
