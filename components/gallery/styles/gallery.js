import styled from 'styled-components';

export const Container = styled.section`
  background-color: #202120;
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
export const Modal = styled.div``;

export const Content = styled.div``;

export const Slider = styled.div``;

export const Image = styled.div``;

export const Link = styled.a``;
