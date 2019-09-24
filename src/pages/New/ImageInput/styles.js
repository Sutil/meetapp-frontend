import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      height: 200px;
      width: 600px;
      border-radius: 4px;
      background: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255,255,255,0.5);
    }

    img {
      height: 200px;
      width: 600px;
      object-fit: cover;
      border-radius: 4px;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
