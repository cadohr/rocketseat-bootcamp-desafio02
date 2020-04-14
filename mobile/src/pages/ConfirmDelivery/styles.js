import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Content = styled.View`
  margin: -100px 20px 0 20px;
`;

export const CameraWrapper = styled.View`
  width: 100%;
  height: 90%;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const TakePictureButton = styled(RectButton)`
  background: rgba(000, 000, 000, 0.5);
  position: absolute;
  padding: 20px;
  border-radius: 100px;
  bottom: 25px;
  align-self: center;
`;

export const SubmitButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  background: ${colors.primary};
`;
