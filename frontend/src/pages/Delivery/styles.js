import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0;

  > span {
    display: block;
    margin-top: 25px;
  }
`;

export const Status = styled.div`
  background: ${props => props.color};
  border-radius: 12px;
  color: ${props => darken(0.4, props.color)};
  font-size: 14px;
  font-weight: bold;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => darken(0.4, props.color)};
    margin: 0 5px;
  }
`;
