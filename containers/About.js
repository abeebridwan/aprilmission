/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import About from '../components/about/index';
import Slider from '../components/slider/index';
import { ToggleContext } from '../context/modal';

const AboutContainers = ({ children }) => {
  const { ShowModal, setShowModal, aboutModal, setAboutModal } = useContext(ToggleContext);
  return (
    <About id="about">
      <About.Content>
        <h2>About Us</h2>
        <div />
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
        <lite-youtube
          videoid="4dCiLT3At8k"
          videotitle="Africa Children"
          params="controls=0"
          autoload
          style={{
            backgroundImage: "url('https://i.ytimg.com/vi/4dCiLT3At8k/hqdefault.jpg')",
            borderRadius: '6px',
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </About.Video>
      {children}
    </About>
  );
};
export default AboutContainers;
