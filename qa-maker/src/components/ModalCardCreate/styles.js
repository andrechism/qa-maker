import styled from "styled-components"
import * as Input from "../Input/styles"
import * as TextArea from "../TextArea/styles"
import RectangleDotted from "../../assets/images/rectangle-dotted.svg"

export const Container = styled.div`
  padding: 10px;

  & ${Input.Container} {
    margin-bottom: 45px;
  }

  & ${Input.Label} {
    margin-bottom: 8px;
  }

  & ${Input.WrapperInput} {
    padding: 15px 20px;
  }

`

export const ContainerImageUploading = styled.div`
  margin-bottom: 35px;
`

export const AddImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${RectangleDotted});
  background-size: 72px 72px;
  background-repeat: no-repeat;
  width: 72px;
  height: 72px;
  font-size: 10px;
  line-height: 12px;
  margin: 4px;
  color: #5a6256;
  cursor: pointer;
`

export const UploadImageWrapper = styled.div`
  display: flex;
  & ${TextArea.Container} {
    margin-bottom: 35px;
  }
`

export const ImageItem = styled.div``

export const Image = styled.img`
  margin: 5px;
`

export const ButtonCreate = styled.button`
  all: unset;
  width: 190px;
  height: 47px;
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
`
