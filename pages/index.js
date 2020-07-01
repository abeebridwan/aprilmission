import 'normalize.css';
import React, { useState } from 'react';
import HeaderContainer from '../containers/Header';
import SliderContainer from '../containers/Slider';
import ModalContainer from '../containers/Modal';
import ServiceContainer from '../containers/Service';
import AboutContainer from '../containers/About';
import { ToggleContext } from '../context/modal';

export default function Index() {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <ToggleContext.Provider value={{ ShowModal, setShowModal }}>
      <HeaderContainer>
        <SliderContainer />
        <ModalContainer />
      </HeaderContainer>
      <ServiceContainer />
      <AboutContainer />
    </ToggleContext.Provider>
  );
}
