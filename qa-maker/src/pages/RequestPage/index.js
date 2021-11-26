import { ModalCardCreate } from "../../components"
import { Card } from "../../components/Card"
import { Logo } from "../../components/shared/Logo"
import { useModal } from "../../context/ModalContext"
import { useQA } from "../../context/QaContext"

import * as S from "./styles"

export const RequestPage = () => {
  const { openModal } = useModal()
  const { listQA } = useQA()

  console.log(listQA)
  return (
    <S.Container>
      <S.WrapperContainer>
        <Logo />
        <S.Wrapper>
          <S.Title>Loja Miess</S.Title>
          <S.WrapperIcons onClick={openModal} >
            <S.IconAdd />
            <S.Text>Adicionar novo card</S.Text>
          </S.WrapperIcons>
        </S.Wrapper>
        <S.CardOptions>
          <Card />
          <Card />
        </S.CardOptions>

        <ModalCardCreate />
      </S.WrapperContainer>
    </S.Container>
  )
}
