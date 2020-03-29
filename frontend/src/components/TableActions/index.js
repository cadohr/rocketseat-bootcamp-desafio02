import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, ActionList, Action } from './styles';

export default function TableActions({ actions }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button onClick={handleToggleVisible}>
        <MdMoreHoriz size={16} color="#c6c6c6" />
      </button>

      <ActionList visible={visible}>
        <Action>
          <button>
            <MdRemoveRedEye color="#8e5be8" />
            Visualizar
          </button>
        </Action>
        <Action>
          <button>
            <MdModeEdit color="#4d85ee" />
            Editar
          </button>
        </Action>
        <Action>
          <button>
            <MdDeleteForever color="#de3b3b" />
            Excluir
          </button>
        </Action>
      </ActionList>
    </Container>
  );
}
