import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Avatar, { ConfigProvider } from 'react-avatar';

import TableActions from '~/components/TableActions';

import api from '~/services/api';

import { Container, Table, Status } from './styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');
      console.log(response);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);
  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      {/* <div>
        <Form>
          <Input name="search" placeholder="Buscar por encomendas" />
        </Form>
        <button type="button">
          <MdAdd size={26} color="#fff" />
          CADASTRAR
        </button>
      </div> */}

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
                <button type="button">
                  <MdMoreHoriz size={16} color="#c6c6c6" />
                </button>
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
              <TableActions />
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
    </Container>
  );
}
