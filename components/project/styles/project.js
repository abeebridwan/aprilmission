import styled from 'styled-components';

export const Container = styled.section`
  background-color: #101010;
  padding: 3% 5%;
  box-sizing: border-box;
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
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  color: #898888;
  position: relative;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0.5em;
  @media (min-width: 950px) {
    width: calc(100% / 3.5);
  }
  &::before,
  &::after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: #f67d4a;
  }
  & span::before,
  & span::after {
    content: '';
    width: 3px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background: #f67d4a;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
  }
  &:hover span::before,
  &:hover span::after {
    height: 100%;
  }

  &::after {
    left: 0;
    bottom: 0;
    transition-duration: 0.4s;
  }
  & span::after {
    right: 0;
    top: 0;
    transition-duration: 0.4s;
  }
  &::before {
    right: 0;
    top: 0;
    transition-duration: 0.4s;
  }
  & span::before {
    left: 0;
    bottom: 0;
    transition-duration: 0.4s;
  }
`;
