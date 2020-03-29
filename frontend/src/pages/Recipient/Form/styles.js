import styled from 'styled-components';

import colors from '~/styles/colors';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 25px 0;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
      color: ${colors.gray27};
      font-weight: bold;
    }

    input {
      border: 1px solid ${colors.gainsboro};
      border-radius: 4px;

      height: 44px;
      padding: 0 15px;
      margin-bottom: 10px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    h1 {
      font-size: 24px;
    }

    a,
    button {
      display: flex;
      align-items: center;
      padding: 0px 15px;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;
    }

    a {
      margin-right: 14px;
      color: ${colors.white};
      background: ${colors.gray80};

      &:hover {
        background: ${darken(0.05, colors.gray80)};
      }
    }

    button {
      color: ${colors.white};
      background: ${colors.darkPurple};

      &:hover {
        background: ${darken(0.05, colors.darkPurple)};
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 15px;
  padding: 20px;
  border-radius: 4px;
  background: ${colors.white};

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column !important;

  padding-right: 15px;

  &:last-child {
    padding-right: 0;
  }
`;
