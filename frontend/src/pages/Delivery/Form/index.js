import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import HeaderForm from '~/components/HeaderForm';
import { Input, Select } from '~/components/Form';
import { BackButton, SaveButton } from '~/components/Button';

import { Container, Content } from './styles';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  const title = id ? 'Edição de encomenda' : 'Cadastro de encomenda';

  useEffect(() => {
    async function loadDelivery() {
      if (id) {
        const response = await api.get(`deliveries/${id}`);

        formRef.current.setData(response.data);
        formRef.current.setFieldValue('recipient_id', {
          value: response.data.recipient.id,
          label: response.data.recipient.name,
        });

        formRef.current.setFieldValue('deliveryman_id', {
          value: response.data.deliveryman.id,
          label: response.data.deliveryman.name,
        });
      }
    }

    loadDelivery();
  }, [id]);

  const customStylesSelectInput = {
    control: provided => ({
      ...provided,
      height: 45,
    }),
  };

  async function loadOptions(path, inputValue, callback) {
    const response = await api.get(`/${path}`, {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.rows.map(item => ({
      value: item.id,
      label: item.name,
    }));

    callback(data);
  }

  function loadRecipientsOptions(inputValue, callback) {
    loadOptions('recipients', inputValue, callback);
  }

  async function loadDeliverymenOptions(inputValue, callback) {
    loadOptions('deliverymen', inputValue, callback);
  }

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
      } else {
        await api.put(`/deliveries/${id}`, {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product: data.product,
        });

        toast.success('Destinatário editado com sucesso!');
      }

      reset();
      return history.push('/encomendas');
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
              styles={customStylesSelectInput}
            />

            <Select
              type="text"
              label="Entregador"
              name="deliveryman_id"
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymenOptions}
              styles={customStylesSelectInput}
            />
          </section>
          <Input type="text" label="Nome do produto" name="product" />
        </Form>
      </Content>
    </Container>
  );
}
