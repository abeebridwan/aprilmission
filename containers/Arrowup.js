/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

import ArrowUp from '../components/arrowup/index';

const ArrowUpContainer = ({ children }) => (
  <ArrowUp>
    <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" />
    Top
    {children}
  </ArrowUp>
);

export default ArrowUpContainer;
