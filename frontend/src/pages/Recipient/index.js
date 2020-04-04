import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';
import HeaderList from '~/components/HeaderList';
import { SearchInput } from '~/components/Form';
import { RegisterButton } from '~/components/Button';

import Item from './Item';

import { Container } from './styles';

export default function Recipient() {
  const [page, setPage] = useState(1);
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients(q) {
    const response = await api.get('recipients', {
      params: { q, page },
    });

    setRecipients(response.data);
  }

  async function handleSearch(e) {
    setPage(1);
    loadRecipients(e.target.value);
  }

  useEffect(() => {
    loadRecipients('');
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <HeaderList title="Gerenciamento de Destinatários">
        <SearchInput
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Buscar por destinatários"
        />
        <RegisterButton to="/destinatarios/cadastrar" />
      </HeaderList>

      {(recipients.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <Item
                key={recipient.id}
                recipient={recipient}
                loadRecipients={loadRecipients}
              />
            ))}
          </tbody>
        </Table>
      )) || <span>Não há destinatários cadastrados</span>}
    </Container>
  );
}
