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
            <span>
              <h3>Our Location</h3>
              <p>No. 9b-club road, Jos, Plateau state, Nigeria</p>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
            <span>
              <h3>Phone</h3>
              +2347065654046
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
            <span>
              <h3>Phone</h3>
              +2347039366568
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span>
              <h3>Email</h3>
              aprilmssn@gmail.com
            </span>
          </div>
          <h3>Follow Us</h3>
          <a
            href="https://www.facebook.com/April-Mission-Foundation-104065528577722/"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" aria-label="Twitter" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/aprilmissionfoundation/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </Contact.SmallGroup>
        <Contact.SmallGroup>
          <h2>Contact Form</h2>

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
