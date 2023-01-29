import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";

import { links_list } from "mocks/links_list";

export const LinksList = () => {
  return (
    <S.Wrapper>
      {links_list &&
        links_list.map((link) => (
          <Link href={link.url} key={link.id}>
            <span>
              <Image src="/img/temp/whatsapp_icon.png" fill={true} alt="" />
            </span>
            {link.label}
          </Link>
        ))}
    </S.Wrapper>
  );
};
