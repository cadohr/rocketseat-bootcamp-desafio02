import React, { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';

import api from '~/services/api';

import Table from '~/components/Table';
import HeaderList from '~/components/HeaderList';
import { RegisterButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';

import Item from './Item';

import { Container } from './styles';

export default function Deliveryman() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [deliverymenCount, setDeliverymenCount] = useState(0);
  const [deliverymen, setDeliverymen] = useState([]);

  async function loadDeliverymen(q) {
    const response = await api.get('deliverymen', {
      params: { q, page, limit: perPage },
    });

    setDeliverymen(response.data.rows);
    setDeliverymenCount(response.data.count);
  }

  async function handleSearch(e) {
    setPage(1);
    loadDeliverymen(e.target.value);
  }

  async function handlePagination(current) {
    setPage(current);
  }

  useEffect(() => {
    loadDeliverymen('');
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <HeaderList title="Gerenciando Entregadores">
        <SearchInput
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Buscar por entregadores"
        />
        <RegisterButton to="/entregadores/cadastrar" />
      </HeaderList>

      {(deliverymen.length > 0 && (
        <>
          {deliverymenCount > perPage && (
            <Pagination
              current={page}
              pageSize={perPage}
              total={deliverymenCount}
              onChange={handlePagination}
            />
          )}
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deliverymen.map(deliveryman => (
                <Item
                  key={deliveryman.id}
                  deliveryman={deliveryman}
                  loadDeliverymen={loadDeliverymen}
                  setPage={setPage}
                />
              ))}
            </tbody>
          </Table>
        </>
      )) || <span>Não há entregadores cadastrados</span>}
    </Container>
  );
}
