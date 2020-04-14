import styled from 'styled-components/native';

import colors from '~/styles/colors';

import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${colors.white};
`;

export const Content = styled.View`
  margin-top: -100px;
`;

export const Title = styled(Text)`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;

  text-align: center;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  padding: 20px;
  margin-bottom: 10px;
  background: ${colors.white};

  border-radius: 4px;
  border: 1px solid ${colors.lightGray};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled(Text)`
  font-size: 16px;
  color: ${colors.gray};
`;

export const Date = styled(Text)`
  font-size: 12px;
  color: ${colors.gray};
`;
