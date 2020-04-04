import React, { useState, useEffect, useRef } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container, ActionList } from './styles';

export default function TableActions({ children }) {
  const nodeRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideVisible);

    return () => {
      document.removeEventListener('mousedown', handleOutsideVisible);
    };
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleOutsideVisible(e) {
    if (nodeRef.current.contains(e.target)) {
      return;
    }

    setVisible(false);
  }

  return (
    <Container>
      <button onClick={handleToggleVisible}>
        <MdMoreHoriz size={16} color={colors.gray} />
      </button>

      <ActionList ref={nodeRef} visible={visible}>
        {children}
      </ActionList>
    </Container>
  );
}
