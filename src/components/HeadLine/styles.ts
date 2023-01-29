import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    height: 100px;

    & > h1 {
      font-weight: 700;
      font-size: ${theme.font.sizes.text_lg};
      line-height: 150%;
    }

    & > p {
      font-weight: 400;
      font-size: clamp(
        ${theme.font.sizes.text_xs},
        1.2vw,
        ${theme.font.sizes.text_sm}
      );

      line-height: 130%;
      opacity: 0.7;
    }
  `}
`;
