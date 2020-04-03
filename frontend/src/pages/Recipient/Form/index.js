import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form } from '@unform/core';

import Input from '~/components/Form/SimpleInput';

import { Container, Header, Content, InputGroup } from './styles';
import api from '~/services/api';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef;
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`recipients/${id}`);

      formRef.current.setData(response.data);
    }

    loadRecipient();
  }, [id]);

  function handleSubmit() {
    console.log(123123);
    // dispatch()
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>{id ? 'Edição de destinatário' : 'Cadastro de destinatário'}</h1>

          <div>
            <Link to="/destinatarios">
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
          <InputGroup>
            <Input name="name" label="Nome" />
          </InputGroup>

          <div>
            <InputGroup style={{ flex: 2 }}>
              <Input name="street" label="Rua" />
            </InputGroup>
            <InputGroup>
              <Input name="number" label="Número" />
            </InputGroup>
            <InputGroup>
              <Input name="complement" label="Complemento" />
            </InputGroup>
          </div>

          <div>
            <InputGroup style={{ flex: 2 }}>
              <Input name="city" label="Cidade" />
            </InputGroup>
            <InputGroup style={{ flex: 2 }}>
              <Input name="state" label="Estado" />
            </InputGroup>
            <InputGroup style={{ flex: 2 }}>
              <Input name="postcode" label="CEP" />
            </InputGroup>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
