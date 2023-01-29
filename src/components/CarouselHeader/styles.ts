import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const CarouselHeader_Image_Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;

    & > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  `}
`;
