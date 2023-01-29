import { Headline } from "components/HeadLine";
import Image from "next/image";
import * as S from "./styles";

export const Avatar = () => {
  return (
    <S.Wrapper>
      <Image src="/img/temp/logo.png" alt="" width={100} height={100} />
      <Headline />
    </S.Wrapper>
  );
};
