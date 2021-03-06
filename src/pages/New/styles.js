import styled from 'styled-components';
import colors from '../../styles/colors';
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  padding: 20px 0;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    input, textarea {
      background: rgba(0,0,0,0.2);
      border-radius: 4px;
      margin: 10px 0;
      border: none;
      padding: 10px;
      color: #fff;
    }

    textarea {
      height: 100px;
    }

    span {
      color: ${colors.error};
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

    /* date picker */

    .react-datetime-picker {
      background: rgba(0,0,0,.2);
      border-radius: 4px;

      div {
        border: none;
      }

      input {
        height: unset;
        background: none;
      }

      span {
        color: #fff;
      }

      svg  {
        stroke: #fff;
      }

    }

    div div {
      input {
        width: 100%;
      }
    }
  }

`
