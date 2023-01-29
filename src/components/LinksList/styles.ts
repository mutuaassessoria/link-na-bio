import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    gap: ${theme.spacings.xlarge};

    & > a {
      display: flex;
      align-items: center;
      width: 95%;
      text-decoration: none;
      color: ${theme.colors.texts};
      padding: ${theme.spacings.small} ${theme.spacings.small}
        ${theme.spacings.small} ${theme.spacings.xxxlarge};
      font-size: clamp(
        ${theme.font.sizes.text_sm},
        1.5vw,
        ${theme.font.sizes.text_lg}
      );
      font-weight: 900;
      background: linear-gradient(
        90deg,
        #ff0000 0%,
        #dc470a 27.82%,
        #e9571c 100%
      );
      position: relative;
      letter-spacing: 0.1rem;

      border-radius: 75px 0 0 75px;

      & > span {
        width: 70px;
        height: 70px;
        position: absolute;
        left: 0;
      }

      :after {
        content: "";
        display: block;
        width: 5.43px;
        height: 82.74px;

        background: #ffffff;
        box-shadow: -2.71284px 0px 2.03463px -0.678211px rgba(0, 0, 0, 0.25);
        border-radius: 6.78211px 0px 0px 6.78211px;
        position: absolute;
        right: 0;
      }

      transition: all 0.2s ease-in-out;

      :hover {
        width: 90%;
      }
    }
  `}
`;
