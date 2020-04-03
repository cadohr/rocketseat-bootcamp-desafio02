import React, { useState, useEffect } from 'react';

import Table from '~/components/Table';
import TableActions from '~/components/TableActions';

import { Container } from './styles';

export default function DeliveryProblem() {
  const [problems, setProblems] = useState([]);

  return (
    <Container>
      <h1>Problemas na Entrega</h1>

      {(problems.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id}>
                <td>#{problem.id}</td>
                <td>{problem.name}</td>
                <td>
                  {problem.street}, {problem.number}, {problem.city} -{' '}
                  {problem.state}
                </td>
                <td>
                  <TableActions actions={['view', 'edit', 'delete']} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )) || <span>Não há entregas com problemas</span>}
    </Container>
  );
}
