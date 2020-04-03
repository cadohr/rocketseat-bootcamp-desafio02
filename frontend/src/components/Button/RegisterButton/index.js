import React from 'react';
import { MdAdd } from 'react-icons/md';

import colors from '~/styles/colors';

import IconButton from '../IconButton';

export default function RegiterButton({ action }) {
  return (
    <IconButton
      title="CADASTRAR"
      Icon={MdAdd}
      action={action}
      background={colors.darkPurple}
    />
  );
}
