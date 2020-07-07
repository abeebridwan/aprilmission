import styled from 'styled-components';

export const Container = styled.section`
  background-color: #101010;
  padding: 5%;
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
      margin: 0px auto 30px;
      height:3px;
      width: 50px;
      background: #f67d4a;
    }
}
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  color: #898888;
`;
