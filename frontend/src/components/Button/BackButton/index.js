import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import colors from '~/styles/colors';

import IconLinkButton from '../IconLinkButton';

export default function BackButton({ to }) {
  return (
    <IconLinkButton
      title="VOLTAR"
      Icon={MdKeyboardArrowLeft}
      to={to}
      background={colors.lightGray}
    />
  );
}
