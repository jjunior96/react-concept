import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f2f2f2;
  border-radius: 8px;
  padding: 1.6rem;
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  border: 2px solid #d9d9d9;
  color: #aaa;

  & + div {
    margin-top: 0.8rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #fff;
      border-color: #0425e4;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #9a9999;
    `}

  input {
    color: #9a9999;
    background: transparent;
    border: 0;
    flex: 1;

    /* Remove os estilos nas sugestões do Chrome */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: #fff;
      -webkit-box-shadow: #282f3a26 inset;
      box-shadow: #282f3a26;
      transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;

export const Error = styled.div`
  height: 2rem;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
