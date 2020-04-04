import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.white};
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
      border-right: 1px solid ${colors.lightGray};
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: ${colors.gray};
      margin-right: 20px;
    }

    a.selected {
      color: ${colors.darkGray};
    }
  }

  aside {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      strong {
        color: ${colors.darkGray};
      }

      button {
        border: 0;
        color: red;
      }
    }
  }
`;
