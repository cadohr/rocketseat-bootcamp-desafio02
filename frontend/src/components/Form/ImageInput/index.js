import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import { MdInsertPhoto } from 'react-icons/md';

import { Container, Content } from './styles';

export default function ImageInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(e => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="Preview" width="150" height="150" />
        ) : (
          <>
            <MdInsertPhoto size={40} />
            <strong>Adicionar foto</strong>
          </>
        )}
        <input
          id="avatar"
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
        />
      </Content>
    </Container>
  );
}
