import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  h1 {
    font-size: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 25px;

    input {
      border: 1px solid ${colors.gainsboro};
      border-radius: 4px;

      height: 36px;
      min-width: 300px;
      padding: 0 15px;
    }

    a {
      display: flex;
      align-items: center;

      color: ${colors.white};
      background: ${colors.darkPurple};
      border: 0;
      border-radius: 4px;
      padding: 5px 15px;

      height: 36px;
      font-size: 14px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.darkPurple)};
      }
    }
  }
`;
