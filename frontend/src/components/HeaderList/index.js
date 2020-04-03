import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Form } from '@unform/core';

// import SimpleInput from '../Form/SimpleInput';

import { Container } from './styles';

export default function HeaderList({ title, searchTitle, buttonTitle, to }) {
  return (
    <Container>
      {/* <h1>{title}</h1>

      <div>
        <Form>
          <SimpleInput name="search" placeholder={searchTitle} />
        </Form>
        <Link to={to}>
          <MdAdd size={26} color="#fff" />
          {buttonTitle}
        </Link>
      </div> */}
    </Container>
  );
}
