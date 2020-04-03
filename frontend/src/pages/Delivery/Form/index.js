import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Form } from '@unform/web';

import api from '~/services/api';

import BackButton from '~/components/Button/BackButton';
import SaveButton from '~/components/Button/SaveButton';
import HeaderForm from '~/components/HeaderForm';
import Select from '~/components/Form/AsyncSelect';
import Input from '~/components/Form/SimpleInput';

import { Container, Content } from './styles';

export default function DeliveryForm({ match, navigation }) {
  const { id } = match.params;
  const formRef = useRef();

  const title = id ? 'Edição de encomenda' : 'Cadastro de encomenda';

  useEffect(() => {
    async function loadDelivery() {
      if (id) {
        const response = await api.get(`deliveries/${id}`);

        formRef.current.setData(response.data);
      }
    }

    loadDelivery();
  }, [id]);

  async function loadRecipientsOptions() {}
  async function loadDeliverymenOptions() {}

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.string().required('O destinatário é obrigatório'),
        deliveryman_id: Yup.string().required('O entregador é obrigatório'),
        product: Yup.string().required('O produto é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      if (!id) {
        await api.post('/deliveries', {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product: data.product,
        });

        toast.success('Encomenda cadastrada com sucesso!');

        reset();
        return navigation.navigate('/destinatários');
      }

      await api.put(`/recipients/${id}`, {
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
        product: data.product,
      });

      toast.success('Destinatário editado com sucesso!');

      reset();
      return navigation.navigate('/destinatários');
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
        <BackButton to="/encomendas" />
        <SaveButton action={() => formRef.current.submitForm()} />
      </HeaderForm>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <section>
            <Select
              type="text"
              label="Destinatário"
              name="recipient_id"
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={loadRecipientsOptions}
            />

            <Select
              type="text"
              label="Entregador"
              name="deliveryman_id"
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymenOptions}
            />
          </section>
          <Input type="text" label="Nome do produto" name="product" />
        </Form>
      </Content>
    </Container>
  );
}
