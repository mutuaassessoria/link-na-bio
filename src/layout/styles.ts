import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
