import 'normalize.css';
import React, { useState } from 'react';
import HeaderContainer from '../containers/Header';
import SliderContainer from '../containers/Slider';
import ModalContainer from '../containers/Modal';
import ServiceContainer from '../containers/Service';
import AboutContainer from '../containers/About';
import FounderContainer from '../containers/Founder';
import ProjectContainer from '../containers/project';
import { ToggleContext } from '../context/modal';

export default function Index() {
  const [ShowModal, setShowModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [headerModal, setHeaderModal] = useState(false);
  const [sliderModal, setsliderModal] = useState(false);
  return (
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
    </ToggleContext.Provider>
  );
}
