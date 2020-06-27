import 'normalize.css';
import React, { useState } from 'react';
import HeaderContainer from '../containers/Header';
import SliderContainer from '../containers/Slider';
import ModalContainer from '../containers/Modal';
import ServiceContainer from '../containers/Service';
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
    </ToggleContext.Provider>
  );
}

/* import Head from 'next/head';
import { Container } from '../components/test';

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
 */
