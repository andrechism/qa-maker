import styled from "styled-components";
import ImageBgPages from "../../assets/images/bg-pages.png";
import * as Logo from "../../components/shared/Logo/styles";
import * as Input from "../../components/Input/styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${ImageBgPages});

  & ${Logo.Container} {
    margin-bottom: 80px;
  }
`;

export const WrapperContainer = styled.div`
  max-width: 45%;
  width: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  color: #5daf52;
  font-weight: bold;
  font-size: 21px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  width: 100%;

  & ${Input.Container} {
    margin-bottom: 45px;
  }

  & ${Input.Label} {
    margin-bottom: 8px;
  }

  & ${Input.WrapperInput} {
    padding: 15px 20px;
  }
`;

export const ButtonCreate = styled.button`
  all: unset;
  padding: 1rem 3rem;
  background: #5daf52;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #5daf52e6;
  }
`;
