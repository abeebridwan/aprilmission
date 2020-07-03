import styled from 'styled-components';

export const Container = styled.section`
  margin-top: -10px;
  padding: 10px 0 5px;
  overflow: hidden;
  color: #898888;
  background-color: #101010;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    margin: 2px 10px;
    overflow: hidden;
    padding: 10px 0 10px;
    flex-grow: 1;
  }
  @media (min-width: 635px) {
    & {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #202120;
  height: 90px;
  padding: 10px;
  & svg {
    padding: 0px 25px;
    background: #202120;
    height: 100%;
    line-height: 85px;
    text-align: center;
    color: #c3bfbf;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  & svg:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;

export const Content = styled.div`
  background: #202120;
  flex-grow: 1;
  padding-right: 15px;
  & p {
    font-size: 0.65em;
    margin-top: 40px;
    margin-bottom: 0px;
  }
  & h3 {
    color: #edf0ee;
    margin-top: 5px;
    font-size: 0.9em;
  }
  @media (min-width: 400px) {
    & p {
      font-size: 0.9em;
    }
    & h3 {
      font-size: 1.05em;
    }
  }
`;
