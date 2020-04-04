import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 2px dashed ${colors.lightGray};
  border-radius: 50%;

  height: 150px;
  width: 150px;

  cursor: pointer;

  svg,
  strong {
    color: ${colors.lightGray};
  }

  img {
    border-radius: 50%;
  }

  input {
    display: none;
  }
`;
