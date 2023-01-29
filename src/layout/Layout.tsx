import { ReactNode } from "react";
import * as S from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
