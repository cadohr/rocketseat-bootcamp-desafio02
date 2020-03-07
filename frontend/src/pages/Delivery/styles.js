import styled from 'styled-components';
import { darken } from 'polished';

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

export const DeliveryTable = styled.table`
  width: 100%;
  border: none;
  border-spacing: 0 15px;

  thead th {
    color: #444;
    text-align: left;
    font-size: 16px;
    padding: 12px;
    padding-bottom: 0;

    &:last-child {
      width: 10px;
    }
  }

  tbody td {
    background: #fff;
    padding: 12px;
    font-size: 16px;
    vertical-align: middle;

    &:last-child {
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }

    button {
      background: none;
      border: 0;
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

export const ActionList = styled.div`
  position: absolute;
  width: 200px;
  left: calc(50% - 100px);
  top: calc(100% + 15px);

  padding: 15px;

  background: #eee;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Action = styled.button``;
