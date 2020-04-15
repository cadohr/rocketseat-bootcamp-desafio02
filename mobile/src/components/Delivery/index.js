import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import DeliveryProgress from '~/components/DeliveryProgress';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  Footer,
  InfoContainer,
  Label,
  Info,
} from './styles';

export default function Delivery({ data, navigation }) {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Icon name="local-shipping" size={24} color={colors.primary} />
          <Title>{data.product}</Title>
        </TitleContainer>

        <DeliveryProgress status={data.status} />
      </Content>

      <Footer>
        <InfoContainer>
          <Label>Data</Label>
          <Info>
            {!data.startDateFormatted && !data.endDateFormatted
              ? '- - / - - / - - '
              : data.endDateFormatted
              ? data.endDateFormatted
              : data.startDateFormatted}
          </Info>
        </InfoContainer>

        <InfoContainer>
          <Label>Cidade</Label>
          <Info>{data.recipient.city}</Info>
        </InfoContainer>

        <InfoContainer>
          <Info
            onPress={() => navigation.navigate('DeliveryDetails', { data })}
            style={{ color: colors.primary }}
          >
            Ver detalhes
          </Info>
        </InfoContainer>
      </Footer>
    </Container>
  );
}
