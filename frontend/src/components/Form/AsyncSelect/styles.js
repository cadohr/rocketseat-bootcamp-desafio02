import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.darkGray};

  margin-bottom: 10px;
`;

export const Error = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: ${colors.darkRed};

  margin-top: 8px;
`;
