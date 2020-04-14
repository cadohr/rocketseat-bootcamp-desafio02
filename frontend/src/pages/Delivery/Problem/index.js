import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import Pagination from 'rc-pagination';

import api from '~/services/api';

import Table from '~/components/Table';
import TableActions from '~/components/TableActions';
import HeaderList from '~/components/HeaderList';
import Modal from '~/components/Modal';

import colors from '~/styles/colors';

import { Container } from './styles';

export default function DeliveryProblem() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [problemsCount, setProblemsCount] = useState(0);
  const [problems, setProblems] = useState([]);

  async function handleCancel(problemId) {
    const confirm = window.confirm(
      'Você tem certeza que deseja cancelar essa encomenda?'
    );

    if (!confirm) {
      return;
    }

    try {
      await api.delete(`/problems/${problemId}/cancel-delivery`);
      loadDeliveryProblems();
      toast.success('Encomenda cancelada com sucesso!');
    } catch (err) {
      toast.error('Essa encomenda não pode ser cancelada.');
    }
  }

  async function loadDeliveryProblems() {
    const response = await api.get('/problems', {
      params: { page, limit: perPage },
    });

    setProblems(response.data.rows);
    setProblemsCount(response.data.count);
  }

  async function handlePagination(current) {
    setPage(current);
  }

  useEffect(() => {
    loadDeliveryProblems();
  }, [page]); // eslint-disable-line

  return (
    <Container>
      <HeaderList title="Problemas na Entrega" />

      {(problems.length > 0 && (
        <>
          {problemsCount > perPage && (
            <Pagination
              current={page}
              pageSize={perPage}
              total={problemsCount}
              onChange={handlePagination}
            />
          )}
          <Table>
            <thead>
              <tr>
                <th>Encomenda</th>
                <th>Problema</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {problems.map(problem => (
                <tr key={problem.id}>
                  <td>#{problem.id}</td>
                  <td>{problem.description}</td>
                  <td>
                    <TableActions>
                      <div>
                        <Modal>
                          <section>
                            <strong>VISUALIZAR PROBLEMA</strong>
                            <span>{problem.description}</span>
                          </section>
                        </Modal>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            handleCancel(problem.id);
                          }}
                        >
                          <MdDeleteForever color={colors.actions.delete} />
                          Excluir
                        </button>
                      </div>
                    </TableActions>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )) || <span>Não há entregas com problemas</span>}
    </Container>
  );
}
