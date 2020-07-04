/* eslint-disable react/prop-types */
import Founder from '../components/founder/index';
import Gallery from '../components/carousel/index';

const FounderContainer = ({ children }) => (
  <>
    <Founder>
      <Founder.Title>
        <div>Meet Our Team</div>
        <h2>Founders and Members</h2>
        <div />
      </Founder.Title>
      <Gallery />
    </Founder>
    {children}
  </>
);

export default FounderContainer;
