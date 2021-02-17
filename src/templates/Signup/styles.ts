import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
    max-width: 360px;

    h1 {
      margin-bottom: 2rem;
      font-size: 3.2rem;
    }

    span {
      margin: 1rem 0;
      font-size: 1.3rem;
      max-width: 280px;
      line-height: 2rem;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #0425e4;
        transition: color 0.4s;

        &:hover {
          color: ${shade(0.2, '#0425e4')};
        }
      }
    }

    button {
      margin-top: 1rem;
    }
  }

  > span {
    margin: 1rem 0;
    font-size: 1.3rem;
    max-width: 280px;
    line-height: 2rem;
    font-weight: 500;

    a {
      text-decoration: none;
      color: #0425e4;
      transition: color 0.4s;

      &:hover {
        color: ${shade(0.2, '#0425e4')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  div {
    padding: 2rem;
    height: calc(100vh - 4rem);
  }

  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
