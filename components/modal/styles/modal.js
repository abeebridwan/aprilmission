import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0,0);
  }
  to {  
    opacity: 1;
    transform: scale(1,1);
  }
`;
const moveLittle = keyframes`
  from {
    translate(0px, 0px);
  }
  to {  
    translate(0px, 100px);
  }
`;
const fadeInContainer = keyframes`
  from {
    opacity: 0;

  }
  to {  
    opacity: 1;
  
  }
`;
export const Container = styled.div`
  display: ${({ showModal }) => (showModal === true ? 'block' : 'none')};
  position: fixed;
  z-index: 500;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${fadeInContainer} 0.6s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.92);
  height: 100%;
`;

export const Header = styled.div`
  padding: 7px 42px 0 0;
  width: 100%;

  & svg {
    background-color: white;
    padding: 10px 12px;
    margin-left: 90vw;
    margin-right: 80px;
    border-radius: 4px;
    cursor: pointer;
    animation: ${fadeIn} 0.4s 1;
    &:hover {
      background-color: rgb(248, 127, 75);
      animation: ${moveLittle} 0.2s;
    }

    @media (min-width: 650px) {
      & {
        margin-left: 94vw;
        margin-right: 0;
      }
    }
  }
`;

export const Body = styled.div`
  margin-top: 5vh;
  width: 80%;
  height: 75%;
  background-color: white;
  border-radius: 5px;
  @media (min-width: 650px) {
    & {
      width: 60%;
      height: 83%;
    }
  }
  animation: ${fadeIn} 0.4s;
`;
