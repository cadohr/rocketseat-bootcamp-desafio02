import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0;

  > span {
    display: block;
    margin-top: 25px;
  }

  > ul {
    float: right;
    margin-top: 25px;

    > li {
      border-radius: 4px;

      &.rc-pagination-item-active {
        border-color: ${colors.primary};
        background-color: ${colors.primary};
      }
    }
  }
`;
