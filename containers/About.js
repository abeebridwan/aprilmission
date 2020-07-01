/* eslint-disable react/prop-types */
import About from '../components/about/index';

const AboutContainers = ({ children }) => (
  <About>
    <About.Content>i need to focus and become faster</About.Content>
    <About.Video>you can get the best out of every minute</About.Video>
    {children}
  </About>
);
export default AboutContainers;
