import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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

        :nth-child(1) {
          background: ${colors.blue};
        }
      }
    }
  }
`

export const Meetup = styled.div`

  margin-top: 30px;

  img {
    width: 600px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  p {
    margin-top: 30px;
    color: #fff;
  }

  div {
    color: rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    margin-top: 30px;

    svg {
        margin-right: 5px;
    }

    time, span {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 20px;
    }
  }

`;
