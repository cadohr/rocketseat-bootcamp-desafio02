import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { Input, MaskedInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import { BackButton, SaveButton } from '~/components/Button';

import { Container, Content, InputGroup } from './styles';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  const title = id ? 'Edição de destinatário' : 'Cadastro de destinatário';

  useEffect(() => {
    async function loadRecipient() {
      if (id) {
        const { data } = await api.get(`recipients/${id}`);

        formRef.current.setData({
          ...data,
          postcode: data.postcode.replace(
            /^([\d]{2})\.?([\d]{3})-?([\d]{3})/,
            '$1.$2-$3'
          ),
        });
      }
    }

    loadRecipient();
  }, [id]);

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('A rua é obrigatório'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string(),
        city: Yup.string().required('A cidade é obrigatório'),
        state: Yup.string().required('O estado é obrigatório'),
        postcode: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      const body = {
        name: data.name,
        street: data.street,
        number: data.number,
        complement: data.complement,
        city: data.city,
        state: data.state,
        postcode: data.postcode.replace(/\D/g, ''),
      };

      if (!id) {
        await api.post('/recipients', body);

        toast.success('Destinatário cadastrado com sucesso!');
      } else {
        await api.put(`/recipients/${id}`, body);

        toast.success('Destinatário editado com sucesso!');
      }

      reset();
      return history.push('/destinatarios');
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
        <BackButton to="/destinatarios" />
        <SaveButton action={() => formRef.current.submitForm()} />
      </HeaderForm>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" label="Nome" name="name" />

          <section>
            <InputGroup style={{ flex: 3 }}>
              <Input type="text" name="street" label="Rua" />
            </InputGroup>
            <InputGroup>
              <Input type="text" name="number" label="Número" />
            </InputGroup>
            <InputGroup>
              <Input type="text" name="complement" label="Complemento" />
            </InputGroup>
          </section>

          <section>
            <InputGroup>
              <Input type="text" name="city" label="Cidade" />
            </InputGroup>
            <InputGroup>
              <Input type="text" name="state" label="Estado" />
            </InputGroup>
            <InputGroup>
              <MaskedInput
                type="text"
                name="postcode"
                label="CEP"
                mask="99.999-999"
              />
            </InputGroup>
          </section>
        </Form>
      </Content>
    </Container>
  );
}
