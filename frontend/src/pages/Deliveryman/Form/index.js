import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/core';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import Input from '~/components/Form/SimpleInput';

import { Container, Header, Content, InputGroup } from './styles';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`deliveries/${id}`);

      formRef.current.setData(response.data);
    }

    loadDelivery();
  }, [id]);

  function handleSubmit() {
    console.log(123123);
    // dispatch()
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>{id ? 'Edição de encomenda' : 'Cadastro de encomenda'}</h1>

          <div>
            <Link to="/encomendas">
              <MdKeyboardArrowLeft size={22} />
              <span>VOLTAR</span>
            </Link>
            <button type="submit">
              <MdDone size={22} />
              <span>SALVAR</span>
            </button>
          </div>
        </Header>

        <Content>
          <div>
            <InputGroup>
              <Input name="street" label="Rua" />
            </InputGroup>
            <InputGroup>
              <Input name="number" label="Número" />
            </InputGroup>
          </div>

          <div>
            <InputGroup>
              <Input name="product" label="Nome do produto" />
            </InputGroup>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
