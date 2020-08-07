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
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
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
    margin-left: 86vw;
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
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 20px;
  font-size: 14.5px;
  margin-top: 3vw;
  padding: 15px 0px 0px 10px;
  color: #1c304a;
  font-weight: 700;
  width: 80%;
  height: 75%;
  background-color: white;
  background-image: url('/maize.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  animation: ${fadeIn} 0.4s;
  & dt {
    margin: 6px 0;
  }
  & dd {
    margin: 5px 0 5px 40px;
  }
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  &::-webkit-scrollbar-corner {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &:after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.26);
    pointer-events: none;
  }
  @media (min-width: 415px) {
    & {
      overflow: scroll;
      font-size: 15px;
      padding: 10px;
      & dd {
        margin: 5px 0 5px 80px;
      }
    }
  }
  @media (min-width: 650px) {
    & {
      overflow: scroll;
      margin-top: 0;
      width: 70%;
      height: 75%;
      font-size: 16.5px;
      padding: 30px;
      & dd {
        margin: 5px 0 5px 150px;
      }
    }
  }
`;
