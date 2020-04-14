import styled from 'styled-components/native';

import colors from '~/styles/colors';

import Button from '~./components/Button';
import TAreaInput from '~./components/TextAreaInput';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${colors.white};
`;

export const TextAreaInput = styled(TAreaInput)`
  height: 70%;

  padding: 20px;
  margin: -100px 0 20px;

  font-size: 16px;
  color: ${colors.gray};
  background: ${colors.white};

  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;

  font-size: 16px;
  background: ${colors.primary};
`;
