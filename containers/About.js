/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import About from '../components/about/index';
import Slider from '../components/slider/index';
import { ToggleContext } from '../context/modal';

const AboutContainers = ({ children }) => {
  const { ShowModal, setShowModal, aboutModal, setAboutModal } = useContext(ToggleContext);
  return (
    <About>
      <About.Content>
        <h2 id="about">About Us</h2>
        <p>
          April Mission Foundation is a non-profit making organization instituted in August 2020. The organization is
          birthed through our passion for literacy and support to help send back children from vulnerable and
          underprivileged communities to school.
        </p>
        <p>
          We strive to ensure that every young individual regardless of geographic location has the opportunity to
          acquire literacy skills to reach their potential, succeed at school and beyond. We provide free access to
          quality education materials and innovative solutions that target wide-scale illiteracy.
        </p>

        <Slider.Button
          header="header"
          onClick={() => {
            setShowModal(!ShowModal);
            setAboutModal(!aboutModal);
          }}
        >
          Read More
        </Slider.Button>
      </About.Content>
      <About.Video>
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/4dCiLT3At8k"
          title="Africa Children"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </About.Video>
      {children}
    </About>
  );
};
export default AboutContainers;
