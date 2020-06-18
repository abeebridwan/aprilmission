/* eslint-disable react/prop-types */
/* import PropTypes from 'prop-types'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header/index';
import Slider from '../components/slider/index';
/* 
const propTypes = {
  children: PropTypes.elementType.isRequired,
};
 */
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Container>
          <Header.Group>
            <Header.Text>
              <FontAwesomeIcon icon={faPhoneAlt} transform="shrink-3 left-2" />
              +2347065654046
            </Header.Text>
            <Header.Text>
              <FontAwesomeIcon icon={faEnvelope} transform="shrink-3 left-2" />
              aprilmission@gmail.com
            </Header.Text>
          </Header.Group>
          <Header.Group>
            <Slider.Button header="header">Donate Now</Slider.Button>
          </Header.Group>
        </Header.Container>
        <Header.Container>
          <Header.Group>{/* <Header.Logo src={logo} alt="April Mission Logo" /> */}</Header.Group>
          <Header.Group />
        </Header.Container>
      </Header.Frame>
      {children}
    </Header>
  );
}

/* HeaderContainer.propTypes = propTypes; */
