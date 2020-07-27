import styled from 'styled-components';

export const Container = styled.section`
  padding: 3% 5% 6% 5%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 16px;
  color: #f67d4a;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  & h2 {
    color: #898888;
  }
  & div:last-of-type {
    margin: 0px auto 30px;
    height: 3px;
    width: 50px;
    background: #f67d4a;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 800px) {
    & {
      flex-direction: row;
    }
  }
`;

export const SmallGroup = styled.div`
  padding-bottom: 55px;
  margin-top: 5px;
  width: 100%;
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  color: #898888;
  & h3 {
    margin-top: 30px;
    color: #c3bfbf;
    margin-bottom: 0;
  }
  & div {
    margin: 15px 0;
    display: flex;
    align-items: center;
    & h3,
    p {
      margin: 0;
    }
    & h3 {
      color: #c3bfbf;
    }
  }
  & h2 {
    margin-top: 0;
    color: #c3bfbf;
    font-size: 25px;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
  &:first-of-type svg {
    margin-right: 20px;
    color: #f67d4a;
    background-color: #202120;
    padding: 10px;
    min-width: 40px;
    border-radius: 5px;
    &:last-child {
      margin-top: 10px;
    }
  }
  @media (min-width: 800px) {
    &:first-of-type {
      margin-right: 4px;
    }
    &:last-of-type {
      margin-left: 4px;
    }
  }
`;
