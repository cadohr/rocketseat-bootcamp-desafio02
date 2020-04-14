import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.gray,
})`
  font-family: 'Roboto-Regular';
  color: ${colors.gray};
`;
