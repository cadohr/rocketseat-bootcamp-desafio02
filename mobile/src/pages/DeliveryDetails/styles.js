import styled from 'styled-components/native';
import { lighten } from 'polished';

import colors from '~/styles/colors';

import Text from '~/components/Text';

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background: ${colors.white};
`;

export const Content = styled.View`
  margin-bottom: 10px;
  padding: 15px;

  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: bold;

  color: ${colors.primary};

  margin-left: 10px;
`;

export const InfoContainer = styled.View``;

export const Label = styled(Text)`
  font-size: 14px;
  font-weight: bold;

  color: ${colors.gray};

  margin: 10px 0 5px;
`;

export const Info = styled(Text)`
  color: ${colors.darkGray};

  margin: 5px 0;
`;

export const ActionList = styled.View`
  flex-direction: row;

  border-radius: 4px;
  background: ${colors.lightenBlue};
`;

export const Action = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  border: 1px solid ${lighten(0.06, colors.lightGray)};
  padding: 20px;
`;

export const ActionTitle = styled(Text)`
  text-align: center;
  color: ${colors.gray};

  margin-top: 5px;
`;
