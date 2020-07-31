/* eslint-disable react/prop-types */
import Footer from '../components/footer';

const FooterContainer = ({ children }) => (
  <>
    <Footer>
      © 2021 April Mission | powered by
      <a href="https://github.com/olumide025" rel="noreferrer">
        @Olumide
      </a>
      {children}
    </Footer>
  </>
);

export default FooterContainer;
