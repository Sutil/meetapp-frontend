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

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;

    aside {
      a {
        background: ${colors.primary};
        padding: 10px;
        border-radius: 4px;
        margin: 0 5px;
        color: #fff;
        font-weight: bold;
      }

    }
  }
`
