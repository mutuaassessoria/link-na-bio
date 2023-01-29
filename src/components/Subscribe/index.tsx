import * as S from "./styles";

export const Subscribe = () => {
  return (
    <S.Wrapper>
      <h2>Atendimento</h2>
      <p>
        Deixe seu dados e entraremos em contato com você para tirar suas dúvidas
      </p>

      <S.Subscribe_Form>
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="digite aqui!" />
        </S.Subscribe_Form_Input_Wrapper>
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Telfone</label>
          <input type="text" placeholder="digite aqui!" />
        </S.Subscribe_Form_Input_Wrapper>
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Email</label>
          <input type="email" placeholder="digite aqui!" />
        </S.Subscribe_Form_Input_Wrapper>

        <button type="submit">ENVIAR</button>
      </S.Subscribe_Form>
    </S.Wrapper>
  );
};
