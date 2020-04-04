import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import HeaderForm from '~/components/HeaderForm';
import { BackButton, SaveButton } from '~/components/Button';
import { Input, ImageInput } from '~/components/Form';

import { Container, Content } from './styles';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  const title = id ? 'Edição de entragador' : 'Cadastro de entregador';

  useEffect(() => {
    async function loadDeliveryman() {
      if (id) {
        const response = await api.get(`deliverymen/${id}`);

        formRef.current.setData(response.data);
        formRef.current.setFieldValue('avatar', response.data.avatar.url);
      }
    }

    loadDeliveryman();
  }, [id]);

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().required('O email é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      let fileResponse = null;

      if (data.avatar) {
        const formData = new FormData();

        formData.append('file', data.avatar);

        fileResponse = await api.post('files', formData);
      }

      if (!id) {
        await api.post('/deliverymen', {
          name: data.name,
          email: data.email,
          avatar_id: fileResponse?.data?.id,
        });

        toast.success('Entregador cadastrado com sucesso!');
      } else {
        await api.put(`/deliverymen/${id}`, {
          name: data.name,
          email: data.email,
          avatar_id: fileResponse?.data?.id,
        });

        toast.success('Entregador editado com sucesso!');
      }

      reset();
      return history.push('/entregadores');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <HeaderForm title={title}>
        <BackButton to="/entregadores" />
        <SaveButton action={() => formRef.current.submitForm()} />
      </HeaderForm>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ImageInput name="avatar" />
          <Input type="text" label="Nome" name="name" />
          <Input type="email" label="Email" name="email" />
        </Form>
      </Content>
    </Container>
  );
}
