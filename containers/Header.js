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
          <Header.Group />
        </Header.Container>
        {/* <Header.Logo src={logo} alt="April Mission Logo" /> */}
      </Header.Frame>
      {children}
    </Header>
  );
}

/* HeaderContainer.propTypes = propTypes; */
