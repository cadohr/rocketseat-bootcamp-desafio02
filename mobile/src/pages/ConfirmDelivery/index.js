import React, { useState, useRef } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Content,
  CameraWrapper,
  Camera,
  TakePictureButton,
  SubmitButton,
} from './styles';

export default function ConfirmDelivery({ route, navigation }) {
  const cameraRef = useRef();
  const [picture, setPicture] = useState('');

  const { data } = route.params;

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('file', {
      type: 'image/jpg',
      uri: picture,
      name: 'signature.jpg',
    });

    const fileResponse = await api.post('files', formData);

    await api.put(`/deliverymen/${data.deliveryman.id}/deliveries/${data.id}`, {
      end_date: new Date(),
      signature_id: fileResponse.data.id,
    });

    navigation.navigate('Deliveries');
  }

  async function handletakePicture() {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      setPicture(data.uri);
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          {picture ? (
            <CameraWrapper>
              <Image source={{ uri: picture }} style={{ height: '100%' }} />
            </CameraWrapper>
          ) : (
            <CameraWrapper>
              <Camera ref={cameraRef} type="back" captureAudio={false} />
              <TakePictureButton onPress={handletakePicture}>
                <Icon name="camera-alt" color="#fff" size={30} />
              </TakePictureButton>
            </CameraWrapper>
          )}
          <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
        </Content>
      </Container>
    </>
  );
}
