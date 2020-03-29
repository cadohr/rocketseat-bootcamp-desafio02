import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0;

  h1 {
    font-size: 24px;
  }

  /* div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 25px;

    form {
      input {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        height: 36px;
        width: 250px;
        padding: 0 15px;
        margin: 0 0 10px;
      }
    }

    button {
      color: #fff;
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      padding: 10px;

      height: 36px;
      font-size: 14px;
      font-weight: bold;
      transition: background 0.2s;

      text-align: center;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  } */
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  border-spacing: 0 15px;

  thead th {
    color: ${colors.gray27};
    text-align: left;
    font-size: 16px;
    padding: 12px;
    padding-bottom: 0;

    &:last-child {
      width: 10px;
    }
  }

  tbody td {
    color: ${colors.gray40};
    background: ${colors.white};
    padding: 12px;
    font-size: 16px;
    vertical-align: middle;

    &:last-child {
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;

      .sb-avatar {
        border-radius: 50%;
        overflow: hidden;
        font-size: 36px;
      }

      > span {
        margin-left: 10px;
      }
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
`;

export const Status = styled.div`
  background: ${props => props.color};
  border-radius: 12px;
  color: ${props => darken(0.4, props.color)};
  font-size: 14px;
  font-weight: bold;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => darken(0.4, props.color)};
    margin: 0 5px;
  }
`;
