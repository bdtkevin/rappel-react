import styled from 'styled-components';

const SHome = styled.div`
  margin: 50px 10vw;

  .fact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    img {
      width: 120px;
      height: 120px;
    }

    p {
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: -1px;
      line-height: 30px;
      font-size: 22px;
      width: 50%;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export default SHome;
