import * as S from './styles'

export const TextArea = ({ label, placeholder }) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Container placeholder={placeholder} />
    </S.Wrapper>
  )
}
