import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 26px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #999;
      margin-right: 20px;
    }

    a.selected {
      color: #444;
    }
  }

  aside {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      strong {
        color: #444;
      }

      button {
        border: 0;
        color: red;
      }
    }
  }
`;
