import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';
import TableActions from '~/components/TableActions';
import HeaderList from '~/components/HeaderList';

import { Container } from './styles';

export default function Deliveryman() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliveryman');

      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, []);

  return (
    <Container>
      <HeaderList
        title="Gerenciando Entregadores"
        searchTitle="Busca por entregadores"
        buttonTitle="CADASTRAR"
        to="/entregadores/cadastrar"
      />

      {(deliverymen.length > 0 && (
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
            {deliverymen.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>{deliveryman.name}</td>
                <td>
                  {deliveryman.street}, {deliveryman.number}, {deliveryman.city}{' '}
                  - {deliveryman.state}
                </td>
                <td>
                  <TableActions actions={['edit', 'delete']} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )) || <span>Não há entregadores cadastrados</span>}
    </Container>
  );
}
