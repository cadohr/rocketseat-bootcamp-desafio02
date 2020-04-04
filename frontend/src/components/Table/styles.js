import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.table`
  width: 100%;
  border: none;
  border-spacing: 0 15px;

  thead th {
    color: ${colors.darkGray};
    text-align: left;
    font-size: 16px;
    padding: 12px;
    padding-bottom: 0;

    &:last-child {
      width: 10px;
    }
  }

  tbody td {
    color: ${colors.gray};
    background: ${colors.white};
    padding: 10px 12px;
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

      > img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
`;
