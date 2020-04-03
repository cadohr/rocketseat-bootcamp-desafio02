import React from 'react';

import { Button } from './styles';

export default function IconLinkButton({
  title,
  Icon,
  to,
  background,
  ...rest
}) {
  return (
    <Button to={to} background={background} {...rest}>
      <Icon color="#fff" size={22} />
      {title}
    </Button>
  );
}
