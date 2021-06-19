import styled from 'styled-components';

export const MainHeader = styled.header`
  position: relative;
  min-height: 500px;
  @media (min-width: 415px) {
    & {
      min-height: 550px;
    }
  }
  @media (min-width: 788px) {
    & {
      min-height: 650px;
    }
  }
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  &:last-of-type {
    display: ${({ showList }) => (showList === true ? 'flex' : 'none')};
  }
  display: flex;
`;

export const Group = styled.div`
  color: white;
  overflow: hidden;
  &#one {
    padding: 5px 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    width: 62%;
    font-family: 'Open Sans sans-serif';
    @media (min-width: 660px) {
      & {
        flex-direction: row;
        border-right: none;
      }
    }
    @media (min-width: 800px) {
      & {
        position: relative;
        left: 5%;
        justify-content: flex-start;
      }
    }
  }
  &#two {
    padding: 5px 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-grow: 1;
  }
  &#three {
    @media (min-width: 800px) {
      & {
        width: 30%;
        position: relative;
        left: 5%;
      }
    }
  }
  &#four {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    & svg {
      margin-right: 15px;
      background-color: ${({ showList }) => (showList ? 'rgb(248, 127, 75, 0.5)' : 'rgb(248, 127, 75)')};
      padding: 7px 10px;
      border-radius: 3px;
      @media (min-width: 800px) {
        & {
          display: none;
        }
      }
      &:hover {
        background-color: rgb(248, 127, 75, 0.5);
      }
      cursor: pointer;
    }
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
      padding: 15px 15px 15px 0;
    }
    & {
      padding: 15px;
    }
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 13px;
  max-width: 100%;
  @media (min-width: 800px) {
    & {
      margin-left: 0px;
    }
  }
`;
export const LogoText = styled.h2`
  margin: 1rem 0;
  & span#logoColor {
    margin-left: 4px;
    color: #c54b8c;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 800px) {
    & {
      position: relative;
      justify-content: flex-start;
    }
  }
`;
export const Text = styled.p`
  margin: 0;
  padding: 3px 0;
  font-size: 12.5px;
  @media (min-width: 414px) {
    & {
      font-size: 15.5px;
      font-weight: 505;
    }
  }
`;
export const List = styled.ul`
  list-style-type: none;
  display: ${({ topList }) => (topList ? 'none' : 'flex')};
  width: 100%;
  font-weight: 505;
  margin: 0 !important;
  padding: 0;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  @media (min-width: 800px) {
    & {
      height: 100%;
      border-top: none;
      position: relative;
      display: ${({ topList }) => (topList ? 'flex' : 'none')};
    }
  }
`;

export const Link = styled.li`
  text-align: center;
  padding: 18px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  width: 25%;
  color: white;
  &:hover {
    background-color: rgb(248, 127, 75, 0.5);
  }
`;

export const Icon = styled.span``;
