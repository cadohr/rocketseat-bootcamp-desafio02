import styled from 'styled-components';

import colors from '~/styles/colors';

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.gray27};

  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.gainsboro};
  border-radius: 4px;

  height: 44px;
  padding: 0 15px;
  /* margin-bottom: 10px; */
`;

export const Error = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: ${colors.indianRed};

  margin-top: 4px;
`;
