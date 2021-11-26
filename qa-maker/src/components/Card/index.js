import { useState } from "react"
import * as S from "./styles"

export const Card = () => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelected = () => {
    setIsSelected(!isSelected)
  }

  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>#1 Minicart quebrado</S.Title>
        <S.Text>
          O minicart aparenta estar quebrado, será que conseguiriamos dar uma olhada e tentar encaixar melhor as informações de quantidade de acordo
          com o que está desenhado no Figma. + Ver Mais
        </S.Text>
      </S.WrapperText>

      <S.WrapperStatus>
        <S.Status>Status:</S.Status>
        <S.SelectStatus onClick={handleSelected} isSelected={isSelected}>
          Selecionar
          {isSelected && (
            <S.ListStatus>
              <S.ItemStatus>Feito</S.ItemStatus>
              <S.ItemStatus>Em Progresso</S.ItemStatus>
              <S.ItemStatus>Aguardando Info</S.ItemStatus>
            </S.ListStatus>
          )}
        </S.SelectStatus>
      </S.WrapperStatus>

      <S.IconEdit />
      <S.IconRemove />
    </S.Container>
  )
}
