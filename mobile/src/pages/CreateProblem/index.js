import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, TextAreaInput, SubmitButton } from './styles';

export default function CreateProblem({ route, navigation }) {
  const formRef = useRef();

  const { id } = route.params;

  async function handleSubmit(data, { reset }) {
    await api.post(`/deliveries/${id}/problems`, {
      description: 'Destinatário ausente',
    });

    navigation.navigate('Deliveries');

    reset();
  }

  return (
    <>
      <Background />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextAreaInput
            name="description"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
          />
        </Form>
        <SubmitButton onPress={() => formRef.current.submitForm()}>
          Enviar
        </SubmitButton>
      </Container>
    </>
  );
}
