import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 0.2rem;

  & + div {
    margin-top: 1.6rem;
  }

  input {
    flex: 1;
    height: 4rem;
    border: 0;
    padding: 0 1.6rem 0;
    background-color: transparent;
    font-size: 1.4rem;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const Link = styled.a``;
