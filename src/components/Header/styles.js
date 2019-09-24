import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  background: #000;
  height: 64px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    flex-direction: row;

    button {
      margin-left: 20px;
      background: ${colors.primary};
      border: none;
      padding: 0 30px;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
    }
  }

`;

export const Profile = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  a {
    color: rgba(255,255,255,0.6);
    text-decoration: none;
  }
`;
