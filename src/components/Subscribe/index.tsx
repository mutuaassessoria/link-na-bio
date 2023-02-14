import { useState } from "react";
import MaskedInput from "react-text-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState("");

  const FORMID = process.env.FORMID;
  const PORTALID = process.env.PORTALID;

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/22185316/42e3d2d0-283b-4c14-9e67-40589ab76aeb";
    var data = {
      fields: [
        {
          name: "firstname",
          value: name,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "phone",
          value: phone,
        },
      ],
      context: {
        pageUri: "https://bio.mutuaassessoria.com/",
        pageName: "Bio Link Instagram Mútua Assessoria",
      },
    };
    var final_data = JSON.stringify(data);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        toast.success("Mensagem enviada com sucesso!");
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        toast.error("Ooops! Acesso Proibido.");
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        toast.warn("Ooops! Servidor não encontrado.");
      } else if (xhr.readyState === 4 && xhr.status === 400) {
        toast.info("Ooops! Há algo de errado com seu email.");
      }
    };
    // Sends the request
    xhr.send(final_data);
  };

  return (
    <S.Wrapper>
      <h2>Atendimento</h2>
      <p>
        Deixe seu dados e entraremos em contato com você para tirar suas dúvidas
      </p>

      <S.Subscribe_Form onSubmit={handleSubmit}>
        <ToastContainer />
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="digite aqui!"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.Subscribe_Form_Input_Wrapper>
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Telfone</label>
          <MaskedInput
            mask={[
              "(",
              /[1-9]/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-color_tree"
            type="tel"
            value={phone}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
            render={(ref, props: any) => <input ref={ref} {...props} />}
            placeholder="(00) 00000-0000"
          />
        </S.Subscribe_Form_Input_Wrapper>
        <S.Subscribe_Form_Input_Wrapper>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            placeholder="digite aqui!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.Subscribe_Form_Input_Wrapper>

        <button type="submit">ENVIAR</button>
      </S.Subscribe_Form>
    </S.Wrapper>
  );
};
