/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import { faBriefcaseMedical, faHamburger, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sliderData = [
  {
    id: 1,
    src: '/slide_1-small.jpg',
    firstSrc: '/slide_1-medium.jpg',
    secondSrc: '/slide_1-big.jpg',
    title: "Let's be Kind for",
    SubTitle1: 'They just want to Learn',
    SubTitle2: 'Give them a chance by contributing',
    alt: 'a beautiful girl',
  },
  {
    id: 2,
    src: '/slide_2-small.jpg',
    firstSrc: '/slide_2-medium.jpg',
    secondSrc: '/slide_2-big.jpg',
    title: 'Share a Little for',
    SubTitle1: '1 dollar can save a child',
    SubTitle2: 'Little can make a difference',
    alt: 'a group of happy children smilling at the camera',
  },
  {
    id: 3,
    src: '/slide_3-small.jpg',
    firstSrc: '/slide_3-medium.jpg',
    secondSrc: '/slide_3-big.jpg',
    title: "Let's be Kind for",
    SubTitle1: 'Can u imagine this...',
    SubTitle2: 'You can change it',
    alt: 'a group of children sitting on the floor in a outside classroom',
  },
  {
    id: 4,
    src: '/slide_4-small.jpg',
    firstSrc: '/slide_4-medium.jpg',
    secondSrc: '/slide_4-big.jpg',
    title: 'Share a Little for',
    SubTitle1: 'They just want to Learn',
    SubTitle2: 'Give them a chance by contributing',
    alt: 'a group of happy children having class under a tree',
  },
];

export const dotNumbers = [
  { id: 1, num: 0 },
  { id: 2, num: 1 },
  { id: 3, num: 2 },
  { id: 4, num: 3 },
];

export const listData = [
  { id: 1, text: 'About', href: '#about' },
  { id: 2, text: 'Projects', href: '#projects' },
  { id: 3, text: 'Gallery', href: '#gallery' },
  { id: 4, text: 'Contact', href: '#contact' },
];

export const contentData = [
  {
    id: 1,
    text: 'We provide children with',
    head: 'Best Education',
    icon: <FontAwesomeIcon icon={faUserGraduate} size="2x" />,
  },
  {
    id: 2,
    text: 'We support children with',
    head: 'Healthy Foods',
    icon: <FontAwesomeIcon icon={faHamburger} size="2x" />,
  },
  {
    id: 3,
    text: 'We provide children with',
    head: 'Medical Facilities',
    icon: <FontAwesomeIcon icon={faBriefcaseMedical} size="2x" />,
  },
];

const ModalDatas = {
  valueOne: (
    <div>
      <pre>
        <em>Together We are making a difference!</em>
      </pre>
      <h3>Account Information</h3>
      <dl>
        <dt>
          <strong>Account Name:</strong>
        </dt>
        <dd>April Mission Foundation</dd>
        <dt>
          <strong>Account Number: </strong>
        </dt>
        <dd>1023939955</dd>
        <dt>
          <strong>Account Bank: </strong>
        </dt>
        <dd>UBA, Nigeria</dd>
      </dl>

      <p>
        With deepest gratitude and warmest wishes, We thank you on behalf of all the children that your donation will
        impact.
      </p>
      <br />
      <p>
        <em>
          Note: We are currently unable to take payment directly online, and we are working to make that possible. Thank
          you for your patience.
        </em>
      </p>
    </div>
  ),
  valueTwo: (
    <div>
      <h2>About Us</h2>
      <p>
        April Mission Foundation is a non-profit making organization instituted in August 2020. The organization is
        birthed through our passion for literacy and support to help send back children from vulnerable and
        underprivileged communities to school.
      </p>
      <p>
        We strive to ensure that every young individual regardless of geographic location has the opportunity to
        acquire literacy skills to reach their potential, succeed at school and beyond. We provide free access to
        quality education materials and innovative solutions that target wide-scale illiteracy.
      </p>

      <h3>VISION</h3>
      <p>Support and encourage literacy among children from vulnerable and underprivileged communities.</p>
      <h3>MISSION</h3>
      <p>
        To provide and support quality education by enrolling more children in school, providing educational learning materials, and empowering children through technology.
        Work in partnership with other Non-profit organizations whose interest and vision is support for literacy and children.

      </p>
      <h3>GOALS AND OBJECTIVES</h3>

      <p>
        In 5 years,
        <br />
        We intend to support and enroll as many as we can into school.
        To provide a learning resource center where children can have access to educational material,
        Support 100 children to develop solutions in their communities using different e-learning tools and skills.

      </p>
    </div>
  ),
  valueThree: (
    <div>
      <p>Here is an opportunity to impact the lives of thousands of children</p>
      <p>Let Make the World a better place for everyone </p>
      <br />

      <p>Join us by sending an email to <span style={{ border: '2px solid #000', padding: '2.5px', userSelect: 'all' }}><em>aprilmission@gmail.com</em></span></p>
      <p>Our correspondent will get back to you shortly with details of the process.</p>
      <br />
      <p>
        We thank you on behalf of all the children we will impact together.
      </p>
    </div>
  ),
};
export const ModalData = ({ aboutModal, headerModal, sliderModal, projectModal }) => {
  let data;
  if (headerModal === true) {
    data = ModalDatas.valueOne;
  } else if (sliderModal === true) {
    data = ModalDatas.valueOne;
  } else if (aboutModal === true) {
    data = ModalDatas.valueTwo;
  } else if (projectModal === true) {
    data = ModalDatas.valueThree;
  } else { data = '' }
  return data;
};
