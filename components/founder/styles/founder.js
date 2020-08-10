import styled from 'styled-components';

export const Container = styled.section`
  background-color: #202120;
  width: 100%;
`;

export const Title = styled.div`
    font-size: 16px;
    color: #f67d4a;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    & h2{
      color:#898888;
    }
    & div:last-of-type{
      margin: 0px auto 10px;
      height:3px;
      width: 80px;
      background: #f67d4a;
    }
}
`;
export const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 3% 5% 6% 5%;
  @media (min-width: 800px) {
    & {
      margin: 80px 0 0;
    }
  }
`;
