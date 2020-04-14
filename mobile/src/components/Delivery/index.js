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
  console.tron.log(data);
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
          <Info>15/01/2020</Info>
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
