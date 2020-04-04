import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Input } from './styles';

export default function SearchInput(props) {
  return (
    <Container>
      <MdSearch size={22} />
      <Input {...props} />
    </Container>
  );
}
