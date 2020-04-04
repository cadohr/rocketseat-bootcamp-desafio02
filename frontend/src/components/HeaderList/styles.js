import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  h1 {
    color: ${colors.darkGray};
    font-size: 24px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 25px;
  }
`;
