import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    background-color: lightblue;
  }
  50% {
    background-color: lightcoral;
  }
  100% {
    background-color: lightblue;
  }
`;

const SFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #a1a1a1;
  animation: 5s ${changeColor} infinite linear;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: lighter;
    color: #828282;
  }
`;

export default SFooter;
