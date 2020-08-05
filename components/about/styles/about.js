import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #101010;
  padding: 3% 5% 6% 5%;
  font-size: 15px;
  color: #898888;

  @media (min-width: 800px) {
    padding: 0px;
    justify-content: space-between;
    margin: 0 5%;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;
  margin-bottom: 13px;
  & p {
    margin-bottom: 33px;
  }
  & h2 {
    font-size: 15px;
    color: #c3bfbf;
    margin: 0;
    margin-bottom: 7px;
    line-height: 1.5;
  }
  & div {
    margin-bottom: 40px;
    border-bottom: 3px solid rgb(248, 127, 75);
    width: 62px;
  }
  @media (min-width: 800px) {
    & {
      margin-top: 0px;
      margin-left: 2.5%;
      width: 47%;
      order: 2;
      height: 350px;
    }
  }
`;

export const Video = styled.div`
  width: 100%;
  & iframe {
    margin-top: 45px;
    width: 100%;
    max-width: 100%;
    height: 280px;
    border-radius: 10px;
  }
  @media (min-width: 800px) {
    & {
      width: 47%;
      margin-right: 2.5%;
      order: 1;
    }
    & iframe {
      height: 420px;
    }
  }
`;
