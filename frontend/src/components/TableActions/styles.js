import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    background: none;
    border: 0;
    color: #999;
  }
`;

export const ActionList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 10px);
  background: #fff;
  z-index: 1;

  border-radius: 4px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${props => (props.visible ? 'block !important' : 'none !important')};

  &::before {
    content: '';
    position: absolute;
    left: calc(55%);
    top: -0px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px;
    border-color: transparent transparent white white;

    transform-origin: 0 0;
    transform: rotate(135deg);

    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Action = styled.div`
  svg {
    margin-right: 10px;
  }

  & + div {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid #eee;
  }
`;
