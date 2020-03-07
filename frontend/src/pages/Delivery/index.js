import React, { useState, useEffect } from 'react';
import {
  MdMoreHoriz,
  MdAdd,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, DeliveryTable, Status, ActionList, Action } from './styles';

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
      <h1>Gerenciando encomendas</h1>

      <div>
        <Form>
          <Input name="search" placeholder="Buscar por encomendas" />
        </Form>
        <button type="button">
          <MdAdd size={26} color="#fff" />
          CADASTRAR
        </button>
      </div>

      {/* {deliveries.map(delivery => (
          <Delivery key={String(delivery.id)}></Delivery>
        ))} */}

      <DeliveryTable>
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
                  <img
                    src={
                      delivery.deliveryman.avatar.url ||
                      'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt="Ricardo Jacinto"
                  />
                  {delivery.deliveryman.name}
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
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Ricardo Jacinto"
                />
                John doe
              </div>
            </td>
            <td>Rio do sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status color="#DFF0DF">ENTREGUE</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={16} color="#c6c6c6" />
              </button>
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Ludiwig van Beethoven</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Ricardo Jacinto"
                />
                John doe
              </div>
            </td>
            <td>Rio do sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status color="#BAD2FF">RETIRADA</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={16} color="#c6c6c6" />
              </button>
            </td>
          </tr>

          <tr>
            <td>#03</td>
            <td>Ludiwig van Beethoven</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Ricardo Jacinto"
                />
                John doe
              </div>
            </td>
            <td>Rio do sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status color="#FAB0B0">CANCELADA</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={16} color="#c6c6c6" />
              </button>
            </td>
          </tr>

          <tr>
            <td>#04</td>
            <td>Ludiwig van Beethoven</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="Ricardo Jacinto"
                />
                John doe
              </div>
            </td>
            <td>Rio do sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status color="#F0F0DF">PENDENTE</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={16} color="#c6c6c6" />
              </button>
              <ActionList>
                <Action>
                  <MdRemoveRedEye /> Visualizar
                </Action>
                <Action>
                  <MdModeEdit />
                  Editar
                </Action>
                <Action>
                  <MdDeleteForever />
                  Excluir
                </Action>
              </ActionList>
            </td>
          </tr>
        </tbody>
      </DeliveryTable>
    </Container>
  );
}
