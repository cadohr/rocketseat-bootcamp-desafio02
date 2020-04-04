import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  svg {
    position: absolute;
    left: 10px;

    color: ${colors.gray};
  }
`;

export const Input = styled.input`
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;

  height: 36px;
  width: 300px;
  padding: 0 15px 0 35px;
`;
