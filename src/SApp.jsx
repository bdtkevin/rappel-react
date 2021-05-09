import styled from 'styled-components';

// Création dun style pour une balise <div></div>
const SApp = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  // si la variable "darkmode" reçu en paramtre est vrai le background-color est noir, sinon il est blanc
  background-color: ${(props) => (props.darkmode ? '#212121' : '#fff')};

  // si la variable "darkmode" reçu en paramtre est vrai la couleur de la police est blanche, sinon elle est noir
  color: ${(props) => (props.darkmode ? '#fff' : '#212121')};

  .button-darkmode-container {
    margin-top: 50px;
    text-align: center;
  }
`;

export default SApp;
