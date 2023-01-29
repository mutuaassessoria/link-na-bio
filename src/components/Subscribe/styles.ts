import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: ${theme.spacings.xxxlarge};

    & > h2 {
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
      max-width: 80%;
    }
  `}
`;

export const Subscribe_Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: ${theme.colors.shape_color};
    padding: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    border-radius: 0.8rem;
    gap: ${theme.spacings.small};

    & > button {
      background: linear-gradient(
        90deg,
        #ff0000 0%,
        #dc470a 27.82%,
        #e9571c 100%
      );
      padding: calc(${theme.spacings.xsmall} + 0.6rem) ${theme.spacings.xsmall};
      width: 100%;
      font-size: ${theme.font.sizes.text_xs};
      color: ${theme.colors.texts};
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
  `}
`;

export const Subscribe_Form_Input_Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    & > label {
      font-weight: 500;
      font-size: ${theme.font.sizes.text_xs};
      line-height: 16px;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    & > input {
      padding: ${theme.spacings.xsmall};
      width: 100%;
      outline: none;
      border: none;

      :focus {
        outline: none;
        border: none;
      }
    }
  `}
`;
