import styled from 'styled-components';
import { darken } from 'polished';

export const Status = styled.div`
  background: ${props => props.color};
  border-radius: 12px;
  color: ${props => darken(0.4, props.color)};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => darken(0.4, props.color)};
    margin: 0 5px;
  }
`;
