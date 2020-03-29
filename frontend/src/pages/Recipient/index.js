import React, { useState, useEffect } from 'react';

import TableActions from '~/components/TableActions';

import api from '~/services/api';

import { Container, Table } from './styles';

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
      <h1>Gerenciamento de Destinatários</h1>

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
                <TableActions />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
