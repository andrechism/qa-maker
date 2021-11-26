import { useState } from "react";
import { Input } from "../../components/Input";
import { Logo } from "../../components/shared/Logo";
import { useQA } from "../../context/QaContext";
import * as S from "./styles";

export const Home = () => {
  const [text, setText] = useState("");

  const { createQa } = useQA();

  const handleSubmit = () => {
    createQa(text);
  };

  return (
    <S.Container>
      <S.WrapperContainer>
        <Logo />
        <S.Text>
          Crie e edite pontos na sua Q.A de forma prática e organizada,
          adicionando imagens e administrando o status da solicitação.
        </S.Text>
        <S.Wrapper>
          <Input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Nome do Projeto"
            placeholder="Digite o nome do projeto..."
          />
        </S.Wrapper>
        <S.ButtonCreate onClick={handleSubmit}>Criar Q.A</S.ButtonCreate>
      </S.WrapperContainer>
    </S.Container>
  );
};
