import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import colors from '~/styles/colors';

import Delivery from '~/components/Delivery';

import {
  Container,
  DeliverymanInfo,
  Avatar,
  TitleContainer,
  Welcome,
  Name,
  LogoutContainer,
  Header,
  Title,
  List,
  Filters,
  Filter,
} from './styles';

export default function Deliveries({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const [delivered, setDelivered] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  async function loadDeliveries() {
    const response = await api.get(`deliverymen/${profile.id}/deliveries`, {
      params: { delivered },
    });

    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, [delivered]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <DeliverymanInfo>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : `https://api.adorable.io/avatar/50/${profile.name}.png`,
          }}
        />

        <TitleContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
        </TitleContainer>

        <LogoutContainer>
          <Icon
            onPress={handleLogout}
            name="input"
            size={22}
            color={colors.red}
          />
        </LogoutContainer>
      </DeliverymanInfo>

      <Header>
        <Title>Entregas</Title>

        <Filters>
          <Filter selected={!delivered} onPress={() => setDelivered(false)}>
            Pendentes
          </Filter>
          <Filter selected={delivered} onPress={() => setDelivered(true)}>
            Entregues
          </Filter>
        </Filters>
      </Header>
      <List
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Delivery data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
