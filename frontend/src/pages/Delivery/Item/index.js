import React from 'react';
import { toast } from 'react-toastify';
import Avatar, { ConfigProvider } from 'react-avatar';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Modal from '~/components/Modal';
import TableActions from '~/components/TableActions';

import colors from '~/styles/colors';

import { Status } from './styles';

export default function Item({ delivery, loadDeliveries, setPage }) {
  async function handleDelete(deliveryId) {
    const confirm = window.confirm(
      'Você tem certeza que deseja deletar essa encomenda?'
    );

    if (!confirm) {
      return;
    }

    try {
      await api.delete(`/deliveries/${deliveryId}`);
      setPage(1);
      loadDeliveries('');
      toast.success('Encomenda apagada com sucesso!');
    } catch (err) {
      toast.error('Essa encomenda não pode ser apagada.');
    }
  }

  return (
    <>
      <tr>
        <td>#{delivery.id}</td>
        <td>{delivery.recipient.name}</td>
        <td>
          <div>
            {delivery.deliveryman.avatar ? (
              <img
                src={delivery.deliveryman.avatar.url}
                alt={delivery.deliveryman.name}
              />
            ) : (
              <ConfigProvider colors={colors.avatar}>
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
          <Status color={colors.status[delivery.status]}>
            {delivery.status}
          </Status>
        </td>
        <td>
          <TableActions>
            <div>
              <Modal>
                <section>
                  <strong>Informações da encomenda</strong>
                  <span>
                    {delivery.recipient.street}, {delivery.recipient.number}
                  </span>
                  <span>
                    {delivery.recipient.city}, {delivery.recipient.state}
                  </span>
                  <span>{delivery.recipient.postcode}</span>
                </section>
                <section>
                  <strong>Datas</strong>
                  <span>
                    <strong>Retirada:</strong>
                    {delivery.startDateFormatted}
                  </span>
                  <span>
                    <strong>Entrega:</strong>
                    {delivery.endDateFormatted}
                  </span>
                </section>

                <section>
                  <strong>Assinatura do destinatário</strong>
                  {delivery.signature && (
                    <img
                      src={delivery.signature.url}
                      alt={delivery.signature.name}
                    />
                  )}
                </section>
              </Modal>
            </div>
            <div>
              <button
                onClick={() => {
                  history.push(`/encomendas/editar/${delivery.id}`);
                }}
              >
                <MdModeEdit color={colors.actions.edit} />
                Editar
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  handleDelete(delivery.id);
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
