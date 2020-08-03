/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Project from '../components/project/index';
import Slider from '../components/slider/index';
import { ToggleContext } from '../context/modal';

const ProjectContainer = ({ children }) => {
  const { ShowModal, setShowModal, projectModal, setprojectModal, projecttwoModal, setprojecttwoModal } =
    useContext(ToggleContext);
  return (
    <Project id="projects">
      <Project.Title>
        <div>Our Stories</div>
        <h2>Projects</h2>
        <div />
      </Project.Title>
      <Project.Group>
        <Project.Item>
          <span>
            <h3>INTERNATIONAL DAY OF EDUCATION</h3>
            <p>
              This is an annual project where the world celebrates the importance of education. We carry out this
              project every 24th January; we reach out with educational materials for learning to children in rural
              communities. It has had a significant impact because most of these children get to have something to write
              on for the very first time.
            </p>
            <p>Through this project, we have gotten beneficiaries for other projects running throughout the year.</p>
          </span>
        </Project.Item>
        <Project.Item>
          <span>
            <h3>BACK TO SCHOOL</h3>
            <p>
              This is a project that runs on a daily, weekly, monthly, and yearly basis. In 2020, we supported two
              children from underprivileged homes; send them back to school; in 2021, two more children were supported
              and returned to school.
            </p>
            <Slider.Button
              header="header"
              onClick={() => {
                setShowModal(!ShowModal);
                setprojecttwoModal(!projecttwoModal);
              }}
            >
              Read More
            </Slider.Button>
          </span>
        </Project.Item>
        <Project.Item>
          <span>
            <h3>BECOMING A VOLUNTEER</h3>
            <p>We need more young people to get involved to ensure that we achieve sustainable development.</p>
            <Slider.Button
              header="header"
              onClick={() => {
                setShowModal(!ShowModal);
                setprojectModal(!projectModal);
              }}
            >
              Appy Now!
            </Slider.Button>
          </span>
        </Project.Item>
      </Project.Group>
      {children}
    </Project>
  );
};

export default ProjectContainer;
