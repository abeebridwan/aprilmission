/* eslint-disable react/prop-types */
/* import PropTypes from 'prop-types'; */
import Header from '../components/header/index';
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
            <Header.Text>+2347065654046</Header.Text>
            <Header.Text>aprilmission@gmail.com</Header.Text>
          </Header.Group>
          <Header.Group />
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
