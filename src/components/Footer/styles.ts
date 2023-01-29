import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin-top: ${theme.spacings.xxxlarge};
    background-color: ${theme.colors.shape_color};
    font-size: calc(${theme.font.sizes.text_xs} - 0.2rem);

    & > a {
      color: ${theme.colors.texts};
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
