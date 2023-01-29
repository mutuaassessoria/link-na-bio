import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  `}
`;

export const VideoModal_Video_Wrapper = styled.div`
  ${({ theme }) => css``}
`;
