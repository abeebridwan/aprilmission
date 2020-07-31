import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #202120;
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
  color: #c3bfbf;
  font-weight: 600;
  & a {
    text-decoration: none;
    margin-left: 5px;
    color: #f67d4a;
    cursor: pointer;
    &:hover {
      color: rgb(248, 127, 75, 0.5);
    }
  }
`;
