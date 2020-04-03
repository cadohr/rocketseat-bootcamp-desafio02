import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, ActionList, Action } from './styles';

export default function TableActions({ actions = [] }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button onClick={handleToggleVisible}>
        <MdMoreHoriz size={16} color="#c6c6c6" />
      </button>

      {actions.length > 0 && (
        <ActionList visible={visible}>
          {actions.includes('view') && (
            <Action>
              <button>
                <MdRemoveRedEye color="#8e5be8" />
                Visualizar
              </button>
            </Action>
          )}
          {actions.includes('edit') && (
            <Action>
              <button>
                <MdModeEdit color="#4d85ee" />
                Editar
              </button>
            </Action>
          )}
          {actions.includes('delete') && (
            <Action>
              <button>
                <MdDeleteForever color="#de3b3b" />
                Excluir
              </button>
            </Action>
          )}
        </ActionList>
      )}
    </Container>
  );
}
