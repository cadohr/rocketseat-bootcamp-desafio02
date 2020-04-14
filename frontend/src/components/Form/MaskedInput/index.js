import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Label, Input, Error } from './styles';

export default function MaskedInput({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label htmlFor={fieldName}>{label}</Label>
      <Input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Error className="error">{error}</Error>}
    </>
  );
}
