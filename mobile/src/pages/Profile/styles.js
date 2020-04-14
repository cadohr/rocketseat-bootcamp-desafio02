import styled from 'styled-components/native';
import { darken } from 'polished';

import Text from '~/components/Text';
import Button from '~/components/Button';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${colors.white};
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 75px;
`;

export const Details = styled.View`
  align-self: stretch;
  padding: 0 30px;
  margin-top: 35px;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${darken(0.4, colors.gray)};
`;

export const Info = styled(Text)`
  font-size: 22px;
  font-weight: bold;

  margin-bottom: 16px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 50px;
  background: ${colors.red};
`;
