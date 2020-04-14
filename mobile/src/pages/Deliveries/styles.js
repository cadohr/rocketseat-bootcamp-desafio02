import styled from 'styled-components/native';
import { darken } from 'polished';

import Text from '~/components/Text';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
`;

export const DeliverymanInfo = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 20px;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;

  margin-right: 15px;
`;

export const TitleContainer = styled.View`
  flex: 5;
`;

export const Welcome = styled(Text)`
  font-size: 12px;
  color: ${darken(0.3, colors.gray)};

  margin-bottom: 5px;
`;

export const Name = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 22px;
  font-weight: bold;

  color: ${darken(0.3, colors.darkGray)};
`;

export const LogoutContainer = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  margin-top: 15px;
`;

export const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;

  color: ${darken(0.3, colors.darkGray)};
`;

export const Filters = styled.View`
  flex-direction: row;
`;

export const Filter = styled(Text)`
  margin-left: 15px;

  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.selected ? colors.primary : colors.gray)};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
