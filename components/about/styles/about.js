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
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: 1068px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;

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
      margin-left: 2.5%;
      width: 47%;
      order: 2;
    }
  }
`;

export const Video = styled.div`
  width: 100%;
  margin-top: 45px;
  max-width: 100%;

  @media (min-width: 800px) {
    & {
      width: 47%;
      margin-right: 2.5%;
      order: 1;
    }
  }
  @media (min-width: 800px) and (max-width: 1068px) {
    & lite-youtube {
      min-height: 170px;
    }
  }
`;
