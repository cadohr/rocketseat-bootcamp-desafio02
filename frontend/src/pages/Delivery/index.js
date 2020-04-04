import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';
import HeaderList from '~/components/HeaderList';
import SearchInput from '~/components/Form/SearchInput';
import RegisterButton from '~/components/Button/RegisterButton';

import Item from './Item';

import { Container } from './styles';

export default function Delivery() {
  const [page, setPage] = useState(1);
  const [deliveries, setDeliveries] = useState([]);

  async function loadDeliveries(q) {
    const response = await api.get('deliveries', {
      params: { q, page },
    });

    setDeliveries(response.data);
  }

  async function handleSearch(e) {
    setPage(1);
    loadDeliveries(e.target.value);
  }

  useEffect(() => {
    loadDeliveries('');
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <HeaderList title="Gerenciamento de Encomendas">
        <SearchInput
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Buscar por encomendas"
        />
        <RegisterButton to="/encomendas/cadastrar" />
      </HeaderList>

      {(deliveries.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <Item
                key={delivery.id}
                delivery={delivery}
                loadDeliveries={loadDeliveries}
              />
            ))}
          </tbody>
        </Table>
      )) || <span>Não há encomendas cadastradas</span>}
    </Container>
  );
}
