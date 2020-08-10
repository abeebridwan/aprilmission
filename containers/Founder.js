/* eslint-disable react/prop-types */
import Founder from '../components/founder/index';
import Carousel from '../components/carousel/carousel';

const FounderContainer = ({ children }) => (
  <>
    <Founder>
      <Founder.Frame>
        <Founder.Title>
          <div>Meet Our Team</div>
          <h2>Founders and Members</h2>
          <div />
        </Founder.Title>
        <Carousel />
      </Founder.Frame>
      {children}
    </Founder>
  </>
);

export default FounderContainer;
