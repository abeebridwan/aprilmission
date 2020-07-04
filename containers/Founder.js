/* eslint-disable react/prop-types */
import Founder from '../components/founder/index';

const FounderContainer = ({ children }) => (
  <>
    <Founder>
      <p> i am working </p>
    </Founder>
    {children}
  </>
);

export default FounderContainer;
