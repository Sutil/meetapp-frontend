import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    input {
      background: rgba(0,0,0,0.2);
      border-radius: 4px;
      margin: 10px 0;
      border: none;
      padding: 10px;
      color: #fff;
    }

    span {
      color: ${colors.error};
    }

    hr {
      margin: 20px 0;
      border-color: rgba(255,255,255, 0.1);
    }

    > button {
      background: ${colors.primary};
      border: none;
      border-radius: 4px;
      padding: 10px;
      width: 150px;
      align-self: flex-end;
      color: #fff;
      font-weight: bold;
    }
  }

`;
