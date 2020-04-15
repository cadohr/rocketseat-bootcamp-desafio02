import React from 'react';
import { ScrollView, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import colors from '~/styles/colors';

import Background from '~/components/Background';

import {
  Container,
  Detail,
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

  async function handleWithdraw() {
    try {
      await api.put(
        `/deliverymen/${data.deliveryman.id}/deliveries/${data.id}`,
        {
          start_date: new Date(new Date().setHours(12)),
        },
      );

      navigation.navigate('Deliveries');
    } catch (error) {
      Alert.alert('Falha na Retirada', error.response.data.error);
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Detail>
          <Content>
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
              <Info style={{ textTransform: 'capitalize' }}>{data.status}</Info>
            </InfoContainer>

            <InfoContainer
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <Label>DATA DE RETIRADA</Label>
                <Info>
                  {data.startDateFormatted
                    ? data.startDateFormatted
                    : '- - / - - / - -'}
                </Info>
              </View>
              <View>
                <Label>DATA DE ENTREGA</Label>
                <Info>
                  {data.endDateFormatted
                    ? data.endDateFormatted
                    : '- - / - - / - -'}
                </Info>
              </View>
            </InfoContainer>
          </Content>

          {!data.endDateFormatted && (
            <ActionList>
              {!data.startDateFormatted ? (
                <Action onPress={handleWithdraw}>
                  <Icon name="trending-flat" size={24} color={colors.primary} />
                  <ActionTitle>Retirar{`\n`}Entrega</ActionTitle>
                </Action>
              ) : (
                <>
                  <Action
                    onPress={() =>
                      navigation.navigate('CreateProblem', { id: data.id })
                    }
                  >
                    <Icon name="highlight-off" size={24} color={colors.red} />
                    <ActionTitle>Informar{`\n`}Problema</ActionTitle>
                  </Action>

                  <Action
                    onPress={() =>
                      navigation.navigate('ViewProblems', { data })
                    }
                  >
                    <Icon name="info-outline" size={24} color={colors.yellow} />
                    <ActionTitle>Visualizar{`\n`}Problemas</ActionTitle>
                  </Action>

                  <Action
                    onPress={() =>
                      navigation.navigate('ConfirmDelivery', { data })
                    }
                  >
                    <Icon
                      name="check-circle"
                      size={24}
                      color={colors.primary}
                    />
                    <ActionTitle>Confirmar{`\n`}Entrega</ActionTitle>
                  </Action>
                </>
              )}
            </ActionList>
          )}
        </Detail>
      </Container>
    </>
  );
}
