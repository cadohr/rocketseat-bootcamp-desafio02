import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 25px 0;
`;

export const Content = styled.div`
  margin-top: 15px;
  padding: 30px 25px;
  border-radius: 4px;
  background: ${colors.white};

  form {
    display: flex;
    flex-direction: column;

    > section {
      display: flex;
      justify-content: space-around;

      margin-top: 15px;

      > div:first-child {
        margin-left: 0;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-left: 15px;
`;
