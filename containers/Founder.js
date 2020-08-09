/* eslint-disable react/prop-types */
import Founder from '../components/founder/index';
/* import Gallery from '../components/carousel/index'; */
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
        {/* <Gallery /> */}
        <Carousel />
      </Founder.Frame>
      {children}
    </Founder>
  </>
);

export default FounderContainer;
