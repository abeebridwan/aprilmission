/* eslint-disable react/prop-types */
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Contact from '../components/contact/index';

const ContactContainer = ({ children }) => {
  const { register } = useForm();
  const [name, setnewName] = useState({});

  const response = `Dear ${name.name},
  
  Thank you for reaching out!
    
  Our correspondant will get back to you shortly.
  
  Sincerly,
  April Mission Team`;

  console.log({ name });
  console.log(response);
  return (
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
        <Contact.SmallGroup>
          <h2>Message</h2>

          <form action="https://formsubmit.co/aprilmssn@gmail.com" method="POST">
            <input
              onChange={(e) => {
                setnewName({ ...name, name: e.target.value });
              }}
              type="text"
              placeholder="Name"
              name="Name"
              required
            />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="hidden" name="_autoresponse" value={response} />
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              required
              {...register('Subject', { required: true, maxLength: 80, pattern: /^[A-Za-z]+$/i })}
            />
            <textarea
              placeholder="Enter Message here..."
              name="Message"
              rows="4"
              cols="50"
              required
              {...register('Message', { required: true, maxLength: 5000 })}
            />
            <input type="submit" value="Submit" />
          </form>
        </Contact.SmallGroup>
      </Contact.Group>
      {children}
    </Contact>
  );
};

export default ContactContainer;
