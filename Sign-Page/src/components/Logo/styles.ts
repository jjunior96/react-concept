import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    color: #2b2a35;
    align-items: center;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #ef7b09;
    }

    svg {
      color: #2b2a35;
      font-size: 2.4rem;
      margin-right: 1rem;
    }

    h1 {
      color: #2b2a35;
      font-size: 2.4rem;
    }
  }
`;
