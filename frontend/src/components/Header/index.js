import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/encomendas" activeClassName="selected">
            ENCOMENDAS
          </NavLink>

          <NavLink to="/entregadores" activeClassName="selected">
            ENTREGADORES
          </NavLink>

          <NavLink to="/destinatarios" activeClassName="selected">
            DESTINATÁRIOS
          </NavLink>

          <NavLink to="/problemas" activeClassName="selected">
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <div>
            <strong>Admin FastFeet</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
