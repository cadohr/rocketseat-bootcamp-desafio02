import React, { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';

import api from '~/services/api';

import Table from '~/components/Table';
import HeaderList from '~/components/HeaderList';
import { SearchInput } from '~/components/Form';
import { RegisterButton } from '~/components/Button';

import Item from './Item';

import { Container } from './styles';

export default function Recipient() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [recipientsCount, setRecipientsCount] = useState(0);
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients(q) {
    const response = await api.get('recipients', {
      params: { q, page, limit: perPage },
    });

    setRecipients(response.data.rows);
    setRecipientsCount(response.data.count);
  }

  async function handleSearch(e) {
    setPage(1);
    loadRecipients(e.target.value);
  }

  async function handlePagination(current) {
    setPage(current);
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
        <>
          {recipientsCount > perPage && (
            <Pagination
              current={page}
              pageSize={perPage}
              total={recipientsCount}
              onChange={handlePagination}
            />
          )}
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
                  setPage={setPage}
                />
              ))}
            </tbody>
          </Table>
        </>
      )) || <span>Não há destinatários cadastrados</span>}
    </Container>
  );
}
