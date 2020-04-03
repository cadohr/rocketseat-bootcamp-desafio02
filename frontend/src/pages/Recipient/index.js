import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';
import TableActions from '~/components/TableActions';
import HeaderList from '~/components/HeaderList';

import { Container } from './styles';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    loadRecipients();
  });

  return (
    <Container>
      <HeaderList
        title="Gerenciamento de Destinatários"
        searchTitle="Buscar por destinatários"
        buttonTitle="CADASTRAR"
        to="/destinatarios/cadastrar"
      />

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
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>
                <td>
                  <TableActions actions={['view', 'edit', 'delete']} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )) || <span>Não há destinatários cadastrados</span>}
    </Container>
  );
}
