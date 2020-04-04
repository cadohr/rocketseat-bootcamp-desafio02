import React from 'react';
import { toast } from 'react-toastify';
import Avatar, { ConfigProvider } from 'react-avatar';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import colors from '~/styles/colors';

import TableActions from '~/components/TableActions';

export default function Item({ deliveryman, loadDeliverymen }) {
  async function handleDelete(deliverymanId) {
    const confirm = window.confirm(
      'Você tem certeza que deseja deletar essa encomenda?'
    );

    if (!confirm) {
      return;
    }

    try {
      await api.delete(`/deliverymen/${deliverymanId}`);
      loadDeliverymen('');
      toast.success('Entregador apagado com sucesso!');
    } catch (err) {
      toast.error('Esse entregador não pode ser apagado.');
    }
  }

  return (
    <>
      <tr key={deliveryman.id}>
        <td>#{deliveryman.id}</td>
        <td>
          {deliveryman.avatar.url ? (
            <img src={deliveryman.avatar.url} alt={deliveryman.name} />
          ) : (
            <ConfigProvider
              colors={['#F4EFFC', '#FCF4EE', '#EBFBFA', '#FFEEF1', '#F4F9EF']}
            >
              <Avatar
                size="35"
                name={deliveryman.name}
                alt={deliveryman.name}
              />
            </ConfigProvider>
          )}
        </td>
        <td>{deliveryman.name}</td>
        <td>{deliveryman.email}</td>
        <td>
          <TableActions>
            <div>
              <button
                onClick={() => {
                  history.push(`/entregadores/editar/${deliveryman.id}`);
                }}
              >
                <MdModeEdit color={colors.actions.edit} />
                Editar
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  handleDelete(deliveryman.id);
                }}
              >
                <MdDeleteForever color={colors.actions.delete} />
                Excluir
              </button>
            </div>
          </TableActions>
        </td>
      </tr>
    </>
  );
}
