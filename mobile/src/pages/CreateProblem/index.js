import React, { useRef, useState } from 'react';
import { Form } from '@unform/mobile';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, TextAreaInput, SubmitButton } from './styles';

export default function CreateProblem({ route, navigation }) {
  const formRef = useRef();
  const [description, setDescription] = useState('');

  const { id } = route.params;

  async function handleSubmit() {
    await api.post(`/deliveries/${id}/problems`, {
      description,
    });

    navigation.navigate('Deliveries');
  }

  return (
    <>
      <Background />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextAreaInput
            name="description"
            value={description}
            onChangeText={setDescription}
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
