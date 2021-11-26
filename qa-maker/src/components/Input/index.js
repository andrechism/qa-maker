import * as S from "./styles";

export const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.WrapperInput>
        <S.Input value={value} onChange={onChange} placeholder={placeholder} />
      </S.WrapperInput>
    </S.Container>
  );
};
