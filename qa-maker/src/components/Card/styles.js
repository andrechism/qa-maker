import styled from "styled-components"
import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 30px;
  max-width: 944px;
  min-height: 230px;

  position: relative;

  &:before {
    content: "";
    background: #359b27;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.12);
    border-radius: 5px 0 0 5px;
    position: absolute;
    width: 23px;
    height: 100%;
    top: 0;
    left: -23px;
  }
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`

export const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  line-height: 28px;
  color: #5a6256;
  margin-bottom: 25px;
`

export const Text = styled.p`
  font-size: 16px;
`

export const WrapperStatus = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Status = styled.span`
  margin-right: 15px;
  color: #323730;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
`

export const SelectStatus = styled.div`
  background: #ffffff;
  border: 1px solid #abb3a8;
  color: #abb3a8;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 20px;
  min-width: 207px;
  cursor: pointer;

  position: relative;

  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #abb3a8;

    position: absolute;
    right: 0;
    top: 15px;
  }
`

export const ListStatus = styled.ul`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  color: #323730;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 1;
`

export const ItemStatus = styled.li`
  padding: 10px 20px;
  cursor: pointer;
`

export const IconEdit = styled(BiEditAlt)`
  position: absolute;
  bottom: 10px;
  right: 50px;
  cursor: pointer;
  color: #abb3a8;
`

export const IconRemove = styled(BsTrash)`
  position: absolute;
  bottom: 10px;
  right: 20px;
  cursor: pointer;
  color: #abb3a8;
`
