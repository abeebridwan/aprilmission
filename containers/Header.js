import { Header } from '../components';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Container>
          <Header.Group />
        </Header.Container>
        <Header.Logo src={logo} alt="April Mission Logo" />
      </Header.Frame>
      {children}
    </Header>
  );
}
