import { Input } from "../../components/Input"
import { Logo } from "../../components/shared/Logo"
import * as S from "./styles"

export const Home = () => {
  return (
    <S.Container>
      <S.WrapperContainer>
        <Logo />
        <S.Text>Crie e edite pontos na sua Q.A de forma prática e organizada, adicionando imagens e administrando o status da solicitação.</S.Text>
        <S.Wrapper>
          <Input label='Nome do Projeto' placeholder="Digite o nome do projeto..." />
        </S.Wrapper>
        <S.ButtonCreate to='/request-page'>Criar Q.A</S.ButtonCreate>
      </S.WrapperContainer>
    </S.Container>
  )
}
