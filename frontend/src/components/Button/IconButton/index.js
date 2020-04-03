import React from 'react';

import { Button } from './styles';

export default function IconButton({
  title,
  Icon,
  action,
  background,
  ...rest
}) {
  return (
    <Button onClick={action} background={background} {...rest}>
      <Icon color="#fff" size={22} />
      {title}
    </Button>
  );
}
