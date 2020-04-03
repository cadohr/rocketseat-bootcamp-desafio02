import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;

  font-size: 14px;
  font-weight: bold;

  border: 0;
  border-radius: 4px;

  height: 36px;
  padding: 0px 15px;

  color: ${colors.white};
  background: ${props => props.background};
  transition: background 0.2s;

  &:hover {
    background: ${props => darken(0.05, props.background)};
  }
`;
