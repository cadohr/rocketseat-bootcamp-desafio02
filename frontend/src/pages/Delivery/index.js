import React, { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Table from '~/components/Table';
import HeaderList from '~/components/HeaderList';
import SearchInput from '~/components/Form/SearchInput';
import RegisterButton from '~/components/Button/RegisterButton';

import Item from './Item';

import { Container } from './styles';

export default function Delivery() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [deliveriesCount, setDeliveriesCount] = useState(0);
  const [deliveries, setDeliveries] = useState([]);

  function formatDate(date) {
    return format(parseISO(date), 'dd/MM/y HH:mm:ss', {
      locale: pt,
    });
  }

  async function loadDeliveries(q) {
    const response = await api.get('deliveries', {
      params: { q, page, limit: perPage },
    });

    setDeliveries(
      response.data.rows.map(delivery => ({
        ...delivery,
        startDateFormatted: delivery.start_date
          ? formatDate(delivery.start_date)
          : null,
        endDateFormatted: delivery.end_date
          ? formatDate(delivery.end_date)
          : null,
        canceledAtFormatted: delivery.canceled_at
          ? formatDate(delivery.canceled_at)
          : null,
      }))
    );
    setDeliveriesCount(response.data.count);
  }

  async function handleSearch(e) {
    setPage(1);
    loadDeliveries(e.target.value);
  }

  async function handlePagination(current) {
    setPage(current);
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
        <>
          {deliveriesCount > perPage && (
            <Pagination
              current={page}
              pageSize={perPage}
              total={deliveriesCount}
              onChange={handlePagination}
            />
          )}
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
                  setPage={setPage}
                />
              ))}
            </tbody>
          </Table>
        </>
      )) || <span>Não há encomendas cadastradas</span>}
    </Container>
  );
}
