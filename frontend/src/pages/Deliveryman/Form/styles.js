import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 25px 0;
`;

export const Content = styled.div`
  margin-top: 15px;
  padding: 20px;
  border-radius: 4px;
  background: ${colors.white};

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 15px;
    }
  }
`;
