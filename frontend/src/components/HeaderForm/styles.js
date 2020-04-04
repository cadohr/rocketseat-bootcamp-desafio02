import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${colors.darkGray};
    font-size: 24px;
  }

  div {
    display: flex;

    a {
      margin-right: 14px;
    }
  }
`;
