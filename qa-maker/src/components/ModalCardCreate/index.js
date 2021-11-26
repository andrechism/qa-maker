import Modal from "react-modal"
import { useModal } from "../../context/ModalContext"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import * as S from "./styles"
import { useState } from "react"
import ImageUploading from "react-images-uploading"

export const ModalCardCreate = () => {
  const { modalIsOpen, afterOpenModal, closeModal, customStyles } = useModal()

  const [images, setImages] = useState([])
  const maxNumber = 4

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList)
  }

  return (
    <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles}>
      <S.Container>
        <Input label="Titulo do problema*" placeholder="Digite um título" />
        <TextArea label="Descrição do problema*" placeholder="Descreva qual é o ajuste necessário" />

        <S.ContainerImageUploading>
          <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
            {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              <S.UploadImageWrapper>
                {imageList.map((image, index) => (
                  <S.ImageItem key={index}>
                    <S.Image src={image["data_url"]} alt="" width="100" />
                  </S.ImageItem>
                ))}

                <S.AddImages style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps}>
                  Adicionar
                </S.AddImages>
              </S.UploadImageWrapper>
            )}
          </ImageUploading>
        </S.ContainerImageUploading>

        <S.ButtonCreate>Criar Card</S.ButtonCreate>
      </S.Container>
    </Modal>
  )
}
