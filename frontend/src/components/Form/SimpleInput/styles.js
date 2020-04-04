import styled from 'styled-components';

import colors from '~/styles/colors';

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.darkGray};

  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;

  height: 45px;
  padding: 0 15px;
  /* margin-bottom: 10px; */
`;

export const Error = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: ${colors.darkRed};

  margin-top: 4px;
`;
