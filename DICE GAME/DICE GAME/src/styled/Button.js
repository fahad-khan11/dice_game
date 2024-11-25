import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  gap: 10px;
  border-radius: 5px 0px 0px 0px;
  background: #000000;
  color: white;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background-color ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background-color ease-in;
  }

  @media (max-width: 1024px) {
    width: 200px;
    font-size: 15px;
    padding: 10px 16px;
  }

  @media (max-width: 768px) {
    width: 180px;
    font-size: 14px;
    padding: 8px 14px;
  }

  @media (max-width: 480px) {
    width: 160px;
    font-size: 13px;
    padding: 6px 12px;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
