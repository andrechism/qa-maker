import * as S from "./styles"

export const Input = ({ label, placeholder }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.WrapperInput>
        <S.Input placeholder={placeholder} />
      </S.WrapperInput>
    </S.Container>
  )
}
