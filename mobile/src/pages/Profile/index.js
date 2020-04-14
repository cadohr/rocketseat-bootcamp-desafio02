import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  Details,
  Label,
  Info,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const dateFormatted = useMemo(() => {
    return profile.created_at
      ? format(parseISO(profile.created_at), 'dd/MM/yyyy', { locale: pt })
      : '- - / - - / - -';
  }, [profile]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: profile.avatar
            ? profile.avatar.url
            : `https://api.adorable.io/avatar/50/${profile.name}.png`,
        }}
      />

      <Details>
        <Label>Nome completo</Label>
        <Info>{profile.name}</Info>

        <Label>Email</Label>
        <Info>{profile.email}</Info>

        <Label>Data de cadastro</Label>
        <Info>{dateFormatted}</Info>

        <LogoutButton onPress={handleLogout}>Sair do sistema</LogoutButton>
      </Details>
    </Container>
  );
}
