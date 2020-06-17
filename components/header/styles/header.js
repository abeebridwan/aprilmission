import styled from 'styled-components';

export const MainHeader = styled.header`
  position: relative;
`;

export const Frame = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.05);
  z-index: 120;
  font-size: 1rem;
`;

export const Group = styled.div`
  &:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    width: 50%;
    font-family: 'Open Sans sans-serif';
    color: white;
  }
`;

export const Logo = styled.img``;

export const Container = styled.div`
  height: 50px;
  &:first-of-type {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  display: flex;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
`;

export const Link = styled.a``;

export const ButtonLink = styled.button``;

export const Icon = styled.span``;

export const SmallGroup = styled.div``;
