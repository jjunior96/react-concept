import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  height: 30rem;
  padding: 2rem;

  & + section {
    margin-top: 2rem;
  }
`;
