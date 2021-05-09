import styled from 'styled-components';

const SApp = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${(props) => (props.darkmode ? '#212121' : '#fff')};
  color: ${(props) => (props.darkmode ? '#fff' : '#212121')};

  .button-darkmode-container {
    margin-top: 50px;
    text-align: center;
  }
`;

export default SApp;
