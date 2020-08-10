import styled from 'styled-components';

export const Container = styled.section`
  padding: 3% 5% 6% 5%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 16px;
  color: #f67d4a;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  & h2 {
    color: #898888;
  }
  & div:last-of-type {
    margin: 0px auto 30px;
    height: 3px;
    width: 50px;
    background: #f67d4a;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 800px) {
    & {
      flex-direction: row;
    }
  }
`;

export const SmallGroup = styled.div`
  margin-top: 5px;
  width: 100%;
  line-height: 1.6em;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  color: #898888;
  & h3 {
    margin-top: 30px;
    color: #c3bfbf;
    margin-bottom: 0;
  }
  & div {
    margin: 15px 0;
    display: flex;
    align-items: center;
    & h3,
    p {
      margin: 0;
    }
    & h3 {
      color: #c3bfbf;
    }
  }
  & h2 {
    margin-top: 0;
    color: #c3bfbf;
    font-size: 25px;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
  &:first-of-type svg {
    margin-right: 20px;
    color: #f67d4a;
    background-color: #202120;
    padding: 10px;
    min-width: 40px;
    border-radius: 5px;
    &:last-child {
      margin-top: 10px;
      border: 2px solid #202120;
      &:hover {
        background-color: transparent;
        border-color: #c3bfbf;
      }
    }
  }
  &:first-of-type {
    padding-bottom: 80px;
  }
  @media (min-width: 800px) {
    &:first-of-type {
      margin-right: 20px;
      padding-bottom: 0px;
    }
    &:last-of-type {
      margin-left: 20px;
    }
  }
  & form {
    width: 100%;
  }
  & input,
  textarea {
    box-sizing: border-box;
    background: #202120;
    width: 100%;
    height: 45px;
    border: 1px solid transparent;
    color: #898888;
    border-radius: 0;
    padding: 6px 18px;
    margin: 15px 0;
    box-shadow: none;
    &:hover,
    :focus,
    :target,
    :focus-visible {
      box-shadow: none;
      border-color: #f67d4a;
      outline: none;
    }
  }
  & textarea {
    height: 90px;
  }
  & [type='submit'] {
    width: 150px;
    border-radius: 5px;
    background-color: #f67d4a;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    margin-bottom: 0;
    &:hover {
      background-color: rgb(248, 127, 75, 0.5);
    }
  }
`;
