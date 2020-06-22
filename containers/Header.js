/* eslint-disable react/prop-types */
/* import PropTypes from 'prop-types'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Header from '../components/header/index';
import Slider from '../components/slider/index';
import listData from '../fixtures/listData';
/*
const propTypes = {
  children: PropTypes.elementType.isRequired,
};
 */
export default function HeaderContainer({ children }) {
  const [ShowList, setShowList] = useState(false);

  return (
    <Header>
      <Header.Frame>
        <Header.Container>
          <Header.Group id="one">
            <Header.SmallGroup>
              <Header.Text>
                <FontAwesomeIcon icon={faPhoneAlt} transform="shrink-2 left-2" />
                +2347065654046
              </Header.Text>
            </Header.SmallGroup>
            <Header.SmallGroup>
              <Header.Text>
                <FontAwesomeIcon icon={faEnvelope} transform="shrink-2 left-2" />
                aprilmission@gmail.com
              </Header.Text>
            </Header.SmallGroup>
          </Header.Group>
          <Header.Group id="two">
            <Slider.Button header="header">Donate Now</Slider.Button>
          </Header.Group>
        </Header.Container>
        <Header.Container>
          <Header.Group id="three">
            <Header.LogoGroup title="April Mission Foundation">
              <Header.Logo alt="April Mission Logo" />
              <Header.LogoText>
                April
                <span id="logoColor">M</span>
              </Header.LogoText>
            </Header.LogoGroup>
          </Header.Group>
          <Header.Group id="four" showList={ShowList}>
            <FontAwesomeIcon
              icon={ShowList ? faTimes : faBars}
              size="lg"
              onClick={() => {
                setShowList(!ShowList);
              }}
            />
            <Header.List topList="topList">
              {listData.map((item) => (
                <Header.Link key={item.id}>{item.text}</Header.Link>
              ))}
            </Header.List>
          </Header.Group>
        </Header.Container>
        <Header.Container showList={ShowList}>
          <Header.List>
            {listData.map((item) => (
              <Header.Link key={item.id}>{item.text}</Header.Link>
            ))}
          </Header.List>
        </Header.Container>
      </Header.Frame>
      {children}
    </Header>
  );
}

/* HeaderContainer.propTypes = propTypes; */
