import React from 'react';

import { Container } from './styles';

export default function HeaderForm({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}
