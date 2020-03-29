import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0;

  h1 {
    font-size: 24px;
  }
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
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
`;
