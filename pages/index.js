import 'normalize.css';
import HeaderContainer from '../containers/Header';
import SliderContainer from '../containers/Slider';

export default function Index() {
  return (
    <HeaderContainer>
      <SliderContainer />
    </HeaderContainer>
  );
}

/* import Head from 'next/head';
import { Container } from '../components/test';

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
 */
