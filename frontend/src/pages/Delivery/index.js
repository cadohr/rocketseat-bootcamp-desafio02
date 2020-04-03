import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Form } from '@unform/core';
import Avatar, { ConfigProvider } from 'react-avatar';

import api from '~/services/api';

import Table from '~/components/Table';
import TableActions from '~/components/TableActions';
import HeaderList from '~/components/HeaderList';

import { Container, Status } from './styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);
  return (
    <Container>
      <HeaderList
        title="Gerenciamento de Encomendas"
        searchTitle="Buscar por encomendas"
        buttonTitle="CADASTRAR"
        to="/encomendas/cadastrar"
      />

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
              <tr key={delivery.id}>
                <td>#{delivery.id}</td>
                <td>{delivery.recipient.name}</td>
                <td>
                  <div>
                    {delivery.deliveryman.avatar.url ? (
                      <img
                        src={delivery.deliveryman.avatar.url}
                        alt={delivery.deliveryman.name}
                      />
                    ) : (
                      <ConfigProvider
                        colors={[
                          '#F4EFFC',
                          '#FCF4EE',
                          '#EBFBFA',
                          '#FFEEF1',
                          '#F4F9EF',
                        ]}
                      >
                        <Avatar
                          size="35"
                          name={delivery.deliveryman.name}
                          alt={delivery.deliveryman.name}
                        />
                      </ConfigProvider>
                    )}

                    <span>{delivery.deliveryman.name}</span>
                  </div>
                </td>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                <td>
                  <Status color="#DFF0DF">ENTREGUE</Status>
                </td>
                <td>
                  <TableActions actions={['view', 'edit', 'delete']} />
                </td>
              </tr>
            ))}

            <tr>
              <td>#01</td>
              <td>Ludiwig van Beethoven</td>
              <td>
                <div>
                  <ConfigProvider
                    colors={[
                      '#f4effc',
                      '#fcf4ee',
                      '#ebfbfa',
                      '#ffeef1',
                      '#f4f9ef',
                    ]}
                  >
                    <Avatar
                      fgColor="#777"
                      size="35"
                      name="John Doe"
                      alt="John Doe"
                    />
                  </ConfigProvider>

                  <span>John Doe</span>
                </div>
              </td>
              <td>Rio do sul</td>
              <td>Santa Catarina</td>
              <td>
                <Status color="#DFF0DF">ENTREGUE</Status>
              </td>
              <td>
                <TableActions />
              </td>
            </tr>

            <tr>
              <td>#02</td>
              <td>Ludiwig van Beethoven</td>
              <td>
                <div>
                  <ConfigProvider
                    colors={[
                      '#f4effc',
                      '#fcf4ee',
                      '#ebfbfa',
                      '#ffeef1',
                      '#f4f9ef',
                    ]}
                  >
                    <Avatar
                      fgColor="#777"
                      size="35"
                      name="John Doe"
                      alt="John Doe"
                    />
                  </ConfigProvider>

                  <span>John Doe</span>
                </div>
              </td>
              <td>Rio do sul</td>
              <td>Santa Catarina</td>
              <td>
                <Status color="#BAD2FF">RETIRADA</Status>
              </td>
              <td>
                <TableActions />
              </td>
            </tr>

            <tr>
              <td>#03</td>
              <td>Ludiwig van Beethoven</td>
              <td>
                <div>
                  <ConfigProvider
                    colors={[
                      '#fcf4ee',
                      '#ebfbfa',
                      '#f4effc',
                      '#ffeef1',
                      '#f4f9ef',
                    ]}
                  >
                    <Avatar
                      fgColor="#777"
                      size="35"
                      name="John Doe"
                      alt="John Doe"
                    />
                  </ConfigProvider>

                  <span>John Doe</span>
                </div>
              </td>
              <td>Rio do sul</td>
              <td>Santa Catarina</td>
              <td>
                <Status color="#FAB0B0">CANCELADA</Status>
              </td>
              <td>
                <TableActions actions={['view', 'edit', 'delete']} />
              </td>
            </tr>

            <tr>
              <td>#04</td>
              <td>Ludiwig van Beethoven</td>
              <td>
                <div>
                  <ConfigProvider
                    colors={[
                      '#f4effc',
                      '#ebfbfa',
                      '#fcf4ee',
                      '#ffeef1',
                      '#f4f9ef',
                    ]}
                  >
                    <Avatar
                      fgColor="#777"
                      size="35"
                      name="John Doe"
                      alt="John Doe"
                    />
                  </ConfigProvider>

                  <span>John Doe</span>
                </div>
              </td>
              <td>Rio do sul</td>
              <td>Santa Catarina</td>
              <td>
                <Status color="#F0F0DF">PENDENTE</Status>
              </td>
              <td>
                <TableActions />
              </td>
            </tr>
          </tbody>
        </Table>
      )) || <span>Não há encomendas cadastradas</span>}
    </Container>
  );
}
