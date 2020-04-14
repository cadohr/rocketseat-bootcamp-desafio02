import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Text from '~/components/Text';

import colors from '~/styles/colors';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${colors.green};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`;
