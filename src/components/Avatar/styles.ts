import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    gap: ${theme.spacings.small};

    transform: translateY(-50px);
    padding: 0 ${theme.spacings.xsmall};

    & > img {
      border: 2px solid ${theme.colors.orange};
      border-radius: 50%;
    }
  `}
`;
