import styled from "styled-components"
import * as Card from "../../components/Card/styles"
import { GrAdd } from "react-icons/gr"
import ImageBgPages from "../../assets/images/bg-pages.png"
import * as Logo from "../../components/shared/Logo/styles"

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
`
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1045px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`

export const Title = styled.h2`
  color: #5daf52;
  font-weight: 800;
  font-size: 50px;
  line-height: 60px;
`

export const WrapperIcons = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const IconAdd = styled(GrAdd)`
  margin-right: 15px;
  padding: 12px;
  background: #5daf52;
  border-radius: 50%;
  width: 47px;
  height: 47px;

  & path {
    stroke: #ffffff;
  }
`

export const Text = styled.span`
  font-weight: bold;
  font-size: 21px;
  line-height: 21px;
  color: #5daf52;
`

export const CardOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  height: 480px;
  width: 100%;
  overflow-y: scroll;

  & ${Card.Container} {
    margin-bottom: 30px;
  }
`
