import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container, Header, Content, InputGroup } from './styles';

export default function RecipientForm() {
  const recipient = useSelector(state => state.recipient);
  const dispatch = useDispatch();

  function handleSubmit() {
    console.log(123123);
    // dispatch()
  }

  return (
    <Container>
      <Form initialData={recipient} onSubmit={handleSubmit}>
        <Header>
          <h1>
            {recipient ? 'Edição de Destinatário' : 'Cadastro de Destinatário'}
          </h1>

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
