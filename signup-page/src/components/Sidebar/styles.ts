import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  left: 0;
  width: 24rem;
  height: 100vh;
  border-right: 2px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding-left: 4rem;

  /* Logo */
  > div {
    margin-top: 3.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    list-style: none;
    width: 100%;

    & + div {
      margin-top: 4rem;
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      /* border-right: 4px solid #ef7b09; */
      color: #5a6786;
      transition: color 0.4s;

      > svg {
        margin-right: 0.8rem;
        font-size: 1.8rem;
      }

      &:hover {
        color: #ef7b09;
      }

      & + a {
        margin-top: 1.6rem;
      }
    }
  }
`;
