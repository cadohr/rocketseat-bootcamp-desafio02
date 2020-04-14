import styled from 'styled-components/native';

import colors from '~/styles/colors';

import Text from '~/components/Text';

export const Container = styled.View`
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;

  margin-bottom: 25px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;

  margin-left: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background: ${colors.lightenBlue};

  padding: 20px;
`;

export const InfoContainer = styled.View``;

export const Label = styled(Text)`
  font-size: 8px;
  font-weight: bold;
  color: ${colors.gray};
`;

export const Info = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.darkGray};
`;
