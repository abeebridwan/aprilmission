/* eslint-disable react/prop-types */
import Project from '../components/project/index';

const ProjectContainer = ({ children }) => (
  <Project>
    I am working
    {children}
  </Project>
);

export default ProjectContainer;
