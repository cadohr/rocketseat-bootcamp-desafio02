import React from 'react';
import { MdAdd } from 'react-icons/md';

import colors from '~/styles/colors';

import IconLinkButton from '../IconLinkButton';

export default function RegisterButton({ to }) {
  return (
    <IconLinkButton
      title="CADASTRAR"
      Icon={MdAdd}
      to={to}
      background={colors.primary}
    />
  );
}
