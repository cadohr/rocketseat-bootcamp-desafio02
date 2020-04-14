import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import Background from '~/components/Background';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  InfoContainer,
  Label,
  Info,
  ActionList,
  Action,
  ActionTitle,
} from './styles';

export default function DeliveryDetails({ route, navigation }) {
  const { data } = route.params;

  return (
    <>
      <Background />
      <Container>
        <Content style={{ marginTop: -100 }}>
          <TitleContainer>
            <Icon name="local-shipping" size={24} color={colors.primary} />
            <Title>Informações da entrega</Title>
          </TitleContainer>
          <InfoContainer>
            <Label>DESTINATÁRIO</Label>
            <Info>{data.recipient.name}</Info>

            <Label>ENDEREÇO DE ENTREGA</Label>
            <Info>
              {data.recipient.street}, {data.recipient.number},{' '}
              {data.recipient.city} - {data.recipient.state},{' '}
              {data.recipient.postcode}
            </Info>

            <Label>PRODUTO</Label>
            <Info>{data.product}</Info>
          </InfoContainer>
        </Content>

        <Content>
          <TitleContainer>
            <Icon name="event" size={24} color={colors.primary} />
            <Title>Situação da entrega</Title>
          </TitleContainer>
          <InfoContainer>
            <Label>STATUS</Label>
            <Info>Pendente</Info>
          </InfoContainer>

          <InfoContainer
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Label>DATA DE RETIRADA</Label>
              <Info>14 / 01 / 2020</Info>
            </View>
            <View>
              <Label>DATA DE ENTREGA</Label>
              <Info>- - / - - / - - </Info>
            </View>
          </InfoContainer>
        </Content>

        <ActionList>
          <Action
            onPress={() =>
              navigation.navigate('CreateProblem', { id: data.id })
            }
          >
            <Icon name="highlight-off" size={24} color={colors.red} />
            <ActionTitle>Informar{`\n`}Problema</ActionTitle>
          </Action>

          <Action onPress={() => navigation.navigate('ViewProblems', { data })}>
            <Icon name="info-outline" size={24} color={colors.yellow} />
            <ActionTitle>Visualizar{`\n`}Problemas</ActionTitle>
          </Action>

          <Action
            onPress={() => navigation.navigate('ConfirmDelivery', { data })}
          >
            <Icon name="check-circle" size={24} color={colors.primary} />
            <ActionTitle>Confirmar{`\n`}Entrega</ActionTitle>
          </Action>
        </ActionList>
      </Container>
    </>
  );
}
