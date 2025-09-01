import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

type ButtonProps = {
  color?: string;
  bgColor?: string;
};

export const Button = styled.button`
  padding: 1rem;
  border-radius: 5px;
  background-color: teal;
  color: white;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
`;

export const DangerButton = styled(Button)`
  background-color: red;
  /* animation: ${rotate} 1s linear infinite; */
`;

export const MagicButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => props.bgColor || "green"};
  color: ${(props) => props.color || "white"};
`;
