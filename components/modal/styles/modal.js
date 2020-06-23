import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {  
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 500;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${fadeIn} 0.4s;
`;

export const Content = styled.div`
  width: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  padding: 4px 30px;
`;

export const Header = styled.div`
  padding: 4px 100px;
  width: 100%;
  & svg {
    background-color: white;
    padding: 10px;
    margin-left: 80%;
    border-radius: 5px;
  }
`;

export const Body = styled.div`
  width: 60%;
  height: 83%;
  margin: 30px auto 0;
  background-color: white;
  border-radius: 5px;
`;
