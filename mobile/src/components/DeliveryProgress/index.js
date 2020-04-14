import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Ball,
  Line,
  ProgressContainer,
  Descriptions,
  Description,
} from './styles';

export default function DeliveryProgress({ status }) {
  return (
    <Container>
      <ProgressContainer>
        <Ball
          marked={
            status === 'pendente' ||
            status === 'retirada' ||
            status === 'entregue'
          }
        />
        <Line />
        <Ball marked={status === 'entregue' || status === 'retirada'} />
        <Line />
        <Ball marked={status === 'entregue'} />
      </ProgressContainer>
      <Descriptions>
        <View>
          <Description>Aguardando</Description>
          <Description>Retirada</Description>
        </View>
        <Description>Retirada</Description>
        <Description>Entregue</Description>
      </Descriptions>
    </Container>
  );
}
