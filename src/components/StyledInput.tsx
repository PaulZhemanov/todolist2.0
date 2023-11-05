import { Text } from "@components/Text"
import styled from "@emotion/styled"

export interface IEditableInputProps {
  fontSize?: string
  color?: string
  fontWeight?: number
  textTransform?: string
  showUnderline?: boolean
  opacity?: number
  inputLength?: number | undefined
}

export const StyledInput = styled.input<IEditableInputProps>`
  border: none;
  outline: none;
  background: transparent;
  /* padding: 0; */
  height: 27px;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  opacity: ${(props) => (props.opacity ? props.opacity : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "inherit"};
  border-bottom: ${(props) =>
    props.showUnderline ? "2px solid #000" : "none"};
  maxlength: ${(props) => (props.inputLength ? props.inputLength : "inherit")};
  padding-block: 0px; /* Устанавливает верхнее и нижнее поле на 10 пикселей */
  padding-inline: 0px; /* Устанавливает левое и правое поле на 20 пикселей */
  padding-block-start: 0px; /* Устанавливает верхнее поле на 5 пикселей */
  padding-block-end: 0px; /* Устанавливает нижнее поле на 5 пикселей */
  padding-inline-start: 0px; /* Устанавливает левое поле на 10 пикселей */
  padding-inline-end: 0%; 
  padding:0px;
`

export const StyledText = styled(Text)<IEditableInputProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "inherit"};
  opacity: ${(props) => (props.opacity ? props.opacity : "inherit")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  height: 27px;
  padding-block: 0px; /* Устанавливает верхнее и нижнее поле на 10 пикселей */
  padding-inline: 0px; /* Устанавливает левое и правое поле на 20 пикселей */
  padding-block-start: 0px; /* Устанавливает верхнее поле на 5 пикселей */
  padding-block-end: 0px; /* Устанавливает нижнее поле на 5 пикселей */
  padding-inline-start: 0px; /* Устанавливает левое поле на 10 пикселей */
  padding-inline-end: 0%;
`
