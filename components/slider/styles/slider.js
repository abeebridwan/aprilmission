import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  overflow-x: hidden;
  @media (min-width: 800px) {
    &:hover a.prev {
      left: 20px;
    }
    &:hover a.next {
      right: 20px;
    }
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
export const Slide = styled.div`
  display: none;
  &.fade {
    animation: ${fade} 2s;
  }
`;

export const Number = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

export const Image = styled.picture`
  & img {
    max-width: 100%;
    height: 500px;
    width: 1599px;
    filter: grayscale(90%);
    filter: brightness(40%);

    @media (min-width: 415px) {
      & {
        height: 550px;
      }
    }
    @media (min-width: 600px) {
      & {
        height: 650px;
      }
    }
  }
`;

export const Link = styled.a`
  display: none;
  @media (min-width: 800px) {
    & {
      cursor: pointer;
      position: absolute;
      top: 60%;
      margin-top: -15px;
      color: white;
      font-weight: bold;
      font-size: 30px;
      transition: 0.6s ease;
      user-select: none;
      display: block;
      transition: all 0.5s;
      text-align: center;
      line-height: 1.4;
      background-color: rgb(248, 127, 75, 0.5);
      width: 55px;
      height: 48px;
      z-index: 10;
      border-radius: 50%;
    }
  }
  &.next {
    right: -100px;
  }

  &.prev {
    left: -100px;
  }
  &.prev:hover,
  &.next:hover {
    background-color: rgb(248, 127, 75);
  }
`;

export const Span = styled.span`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  border: 2px solid #fff;
  background-color: rgb(248, 127, 75, 0.35);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active,
  &.dot:hover {
    background-color: rgb(248, 127, 75);
  }
`;

export const Dot = styled.div`
  text-align: center;
  position: absolute;
  top: 90%;
  left: 41.5%;
  z-index: 20;
  @media (min-width: 800px) {
    & {
      display: none;
    }
  }
  @media (max-width: 261px) {
    & {
      display: none;
    }
  }
`;
const moveOne = keyframes`
  from {
    left: -70%;
  }
  to {  
    left: 10%;
  }
`;
const movetwo = keyframes`
  from {
    left: -70%;
  }
  to {  
    left: 15.35%;
  }
`;

export const Text = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  position: absolute;
  top: 42%;
  width: 85%;
  text-align: left;
  animation: ${moveOne} 5s forwards;
  @media (min-width: 414px) {
    & {
      font-size: 16px;
      width: 75%;
    }
  }
  @media (min-width: 660px) {
    & {
      font-size: 16px;
      width: 55%;
    }
  }
  @media (min-width: 800px) {
    & {
      animation: ${movetwo} 5s forwards;
      top: 45%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  line-height: 2rem;
  color: ${({ color }) => (color ? '#F87F4B' : '#f2f2f2')};
  text-shadow: ${({ color }) => (color ? 'none' : '2px 2px 2px #ff0000')};
  @media (min-width: 414px) {
    & {
      font-size: 38px;
      line-height: 3rem;
    }
  }
  @media (min-width: 660px) {
    & {
      font-size: 45px;
    }
  }
`;

export const SubTitle = styled.p`
  margin: 0;
  padding: 1px 0 0 0;
  &:first-of-type {
    margin-top: 5px;
  }

  @media (min-width: 660px) {
    &:first-of-type {
      margin-top: 10px;
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ bg }) => (bg ? 'transparent' : 'rgb(248, 127, 75)')};
  margin-top: ${({ header }) => (header ? '0' : '15px')};
  font-weight: 650;
  padding: ${({ header }) => (header ? '0px 6px' : '8px 12px 9px')};
  border-radius: 5px;
  display: inline-block;
  border: ${({ bg }) => (bg ? '1px solid #fff' : '0')};
  height: ${({ header }) => (header ? '32px' : '35px')};
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: ${({ header }) => (header ? '0' : '4px')};
  color: inherit;
  overflow: hidden;

  &:hover {
    background-color: rgb(248, 127, 75);
    cursor: pointer;
  }
  @media (min-width: 414px) {
    & {
      margin-top: ${({ header }) => (header ? '0' : '22px')};
      font-size: 1rem;
      height: ${({ header }) => (header ? '35px' : '40px')};
      padding: ${({ header }) => (header ? '0px 10px' : '8px 12px 9px')};
    }
  }
  @media (min-width: 660px) {
    & {
      margin-top: ${({ header }) => (header ? '0' : '30px')};
      margin-right: ${({ header }) => (header ? '-50px' : '4px')};
      font-size: 1rem;
      height: ${({ header }) => (header ? '35px' : '40px')};
    }
  }
`;
