import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 5rem;

  width: 100%;
  border: 0;
  background-color: #0425e4;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#0425e4')};
  }
`;
