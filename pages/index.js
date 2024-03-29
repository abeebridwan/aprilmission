import 'normalize.css';
import React, { useState } from 'react';
import Head from 'next/head';
import HeaderContainer from '../containers/Header';
import SliderContainer from '../containers/Slider';
import ModalContainer from '../containers/Modal';
import ServiceContainer from '../containers/Service';
import AboutContainer from '../containers/About';
import FounderContainer from '../containers/Founder';
import ProjectContainer from '../containers/Project';
import GalleryContainer from '../containers/Gallery';
import ContactContainer from '../containers/Contact';
import FooterContainer from '../containers/Footer';
import ArrowUpContainer from '../containers/Arrowup';

import { ToggleContext } from '../context/modal';

export default function Index() {
  const [ShowModal, setShowModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [headerModal, setHeaderModal] = useState(false);
  const [sliderModal, setsliderModal] = useState(false);
  const [projectModal, setprojectModal] = useState(false);
  const [projecttwoModal, setprojecttwoModal] = useState(false);
  return (
    <>
      <Head>
        <title>April Mission</title>
      </Head>
      <ToggleContext.Provider
        value={{
          ShowModal,
          setShowModal,
          aboutModal,
          setAboutModal,
          headerModal,
          sliderModal,
          setHeaderModal,
          setsliderModal,
          projectModal,
          setprojectModal,
          projecttwoModal,
          setprojecttwoModal,
        }}
      >
        <HeaderContainer>
          <SliderContainer />
        </HeaderContainer>
        <ModalContainer />
        <ServiceContainer />
        <AboutContainer />
        <FounderContainer />
        <ProjectContainer />
        <GalleryContainer />
        <ContactContainer />
        <FooterContainer />
        <ArrowUpContainer />
      </ToggleContext.Provider>
    </>
  );
}
