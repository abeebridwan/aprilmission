import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  background-color: #202120;
  padding: 3% 5%;
  box-sizing: border-box;
  display: relative;
  overflow: auto;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-gap: 0.5em;
  @media (max-width: 380px) {
    & {
      display: block;
    }
    & div {
      margin: 15px auto;
    }
  }
  @media (max-width: 550px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }
  @media (min-width: 715px) and (max-width: 816px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(235px, 311px));
      justify-content: center;
      align-content: center;
    }
  }
`;

export const Item = styled.div`
  height: 200px;
  max-width: 285px;
  background-color: #202120;
  @media (min-width: 550px) {
    & {
      max-width: 310px;
    }
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
export const Modal = styled.div`
  position: fixed;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  z-index: 9900;
  top: 0;
  left: 0;
  overflow-x: scroll;
  animation: ${fadeInContainer} 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 420px) {
    & {
      align-items: flex-start;
    }
  }
  & span {
    right: -33px;
    top: -33px;
    position: absolute;
    font-size: 20px;
    font-weight: 1000;
    padding: 0px 5.5px;
    background-color: #000;
    color: white;
    border: 2px solid #fff;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.9), 0 6px 20px 5px rgba(0, 0, 0, 0.9);
    border-radius: 50%;
  }
`;

const fade = keyframes`
  from {
    opacity: 0.3;
  }
  to {  
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  border: 15px solid #fff;
  border-radius: 5px;
  display: none;
  margin: auto;
  &.fade {
    animation: ${fade} 3s;
  }
`;

export const Slider = styled.div``;

export const Image = styled.div``;

export const Link = styled.a`
  cursor: pointer;
  position: absolute;
  top: 45%;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  background: none;
  display: block;
  transition: all 0.6s ease;
  z-index: 10;
  padding: 8px;
  font-weight: bold;
  &#next {
    right: 0px;
    border-radius: 3px 0 0 3px;
  }

  &#prev {
    left: 0px;
    border-radius: 0 3px 3px 0;
  }
  &#prev:hover,
  &#next:hover {
    background-color: #202120;
  }
`;
