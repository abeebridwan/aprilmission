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
  align-items: center;
`;

export const SmallGroup = styled.div`
  border: 3px solid white;
  height: 500px;
  margin-top: 5px;
  /* &:first-of-type {
    margin-right: 2px;
  }
  &:last-of-type {
    margin-left: 2px;
  } */
`;
