import React from 'react';
import { MdDone } from 'react-icons/md';

import colors from '~/styles/colors';

import IconButton from '../IconButton';

export default function SaveButton({ action }) {
  return (
    <IconButton
      title="SALVAR"
      Icon={MdDone}
      action={action}
      background={colors.primary}
    />
  );
}
