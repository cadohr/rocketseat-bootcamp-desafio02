import React from 'react';
import Popup from 'reactjs-popup';
import { MdRemoveRedEye } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container } from './styles';

export default function Modal({ children }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <MdRemoveRedEye color={colors.actions.view} />
          Visualizar
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: '450px',
        borderRadius: '4px',
        padding: '25px',
      }}
    >
      <Container>{children}</Container>
    </Popup>
  );
}
