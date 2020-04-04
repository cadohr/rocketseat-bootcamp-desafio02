import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  font-size: 14px;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    margin-bottom: 12px;

    border-bottom: 1px solid ${colors.lightGray};

    &:last-child {
      border: none;
    }

    > strong {
      margin-bottom: 12px;
    }

    strong {
      color: ${colors.darkGray};
    }

    span {
      display: block;

      margin-bottom: 12px;

      strong {
        color: ${colors.gray};
      }
    }

    img {
      align-self: center;
    }
  }
`;
