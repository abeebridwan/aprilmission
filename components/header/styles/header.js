import styled from 'styled-components';

export const MainHeader = styled.header`
  position: relative;
`;

export const Frame = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 120;
  font-size: 1rem;
`;
export const Container = styled.div`
  &:first-of-type {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  display: flex;
`;

export const Group = styled.div`
  color: white;
  overflow: hidden;
  &#one {
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    width: 60%;
    font-family: 'Open Sans sans-serif';
    @media (min-width: 660px) {
      & {
        width: 54.5%;
        flex-direction: row;
        border-right: none;
      }
    }
  }
  &#two {
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-grow: 1;
  }
`;
export const SmallGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  height: 100%;
  @media (min-width: 660px) {
    &:first-of-type {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    & {
      padding: 15px;
    }
  }
`;

export const Logo = styled.img``;

export const Text = styled.p`
  margin: 0;
  padding: 3px 0;
  font-size: 13px;
  @media (min-width: 414px) {
    & {
      font-size: 15px;
      font-weight: 505;
    }
  }
`;

export const Link = styled.a``;

export const ButtonLink = styled.button``;

export const Icon = styled.span``;
