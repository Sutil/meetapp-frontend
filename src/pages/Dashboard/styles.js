import styled from 'styled-components';
import colors from '../../styles/colors';
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 50px;
  padding: 0 20px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
    }

    a {
      color: #fff;
      padding: 10px 20px;
      background: ${colors.primary};
      border-radius: 4px;
      font-weight: bold;
    }

  }

  ul {
    margin-top: 40px;

    li {
      background: rgba(0,0,0,0.1);
      padding: 10px 30px;
      margin: 5px 0;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      color: #fff;
    }
  }

`;
