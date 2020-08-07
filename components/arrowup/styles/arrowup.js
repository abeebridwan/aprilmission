import styled from 'styled-components';

export const Container = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1000;
  font-weight: 800;
  font-size: 13px;
  border: none;
  outline: none;
  background-color: #f67d4a;
  color: #fff;
  cursor: pointer;
  padding: 14px 18px;
  border-radius: 50%;
  @media (max-width: 600px) {
    font-size: 10px;
    padding: 11px 15px;
  }
  &:hover {
    background-color: rgb(248, 127, 75, 0.5);
  }
`;
