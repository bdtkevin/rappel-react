import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #a1a1a1;

  nav {
    width: 100%;
    height: 100%;

    .nav-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
      list-style-type: none;

      li a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        letter-spacing: -1px;

        &:hover {
          color: lightblue;
        }
      }
    }
  }
`;

export default SHeader;
