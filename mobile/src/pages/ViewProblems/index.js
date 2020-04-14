import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Content, Title, Card, Description, Date } from './styles';

export default function ViewProblems({ route }) {
  const { data } = route.params;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`deliveries/${data.id}/problems`);

      setProblems(
        response.data.map((problem) => {
          return {
            ...problem,
            createAtFormatted: format(
              parseISO(problem.created_at),
              'dd/MM/yyyy',
              { locale: pt },
            ),
          };
        }),
      );
    }

    loadProblems();
  }, [data.id]);

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Title>{data.product}</Title>
          {problems.map((problem, index) => (
            <Card key={String(problem.id)} first={index === 0}>
              <Description>{problem.description}</Description>
              <Date>{problem.createAtFormatted}</Date>
            </Card>
          ))}
        </Content>
      </Container>
    </>
  );
}
