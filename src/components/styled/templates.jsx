import styled from 'styled-components';

const SButton = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  background-color: #c3c5ca;
  color: #f9f9f9;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transform: translate(1px, 1px);
    background-color: lightblue;
    color: #191919;
  }
`;

export { SButton };
