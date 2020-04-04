import React from 'react';
import { toast } from 'react-toastify';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import colors from '~/styles/colors';

import TableActions from '~/components/TableActions';

export default function Item({ recipient, loadRecipients }) {
  async function handleDelete(recipientId) {
    const confirm = window.confirm(
      'Você tem certeza que deseja deletar essa encomenda?'
    );

    if (!confirm) {
      return;
    }

    try {
      await api.delete(`/recipients/${recipientId}`);
      loadRecipients('');
      toast.success('Destinatário apagado com sucesso!');
    } catch (err) {
      toast.error('Esse destinatário não pode ser apagado.');
    }
  }

  return (
    <>
      <tr>
        <td>#{recipient.id}</td>
        <td>{recipient.name}</td>
        <td>
          {recipient.street}, {recipient.number}, {recipient.city} -{' '}
          {recipient.state}
        </td>
        <td>
          <TableActions>
            <div>
              <button
                onClick={() => {
                  history.push(`/destinatarios/editar/${recipient.id}`);
                }}
              >
                <MdModeEdit color={colors.actions.edit} />
                Editar
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  handleDelete(recipient.id);
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
