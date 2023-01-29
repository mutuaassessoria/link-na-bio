import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Wrapper>
      &copy; {new Date().getFullYear()} - Todos os direitos reservados |
      Desenvolvido por:{" "}
      <a
        href="https://henriqueteixeira.dev.br"
        rel="noreferrer"
        target="_blank"
      >
        Henrique Teixeira
      </a>
    </S.Wrapper>
  );
};
