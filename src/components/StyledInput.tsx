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

  font-size: ${props => props.fontSize ? props.fontSize : "inherit"};
  opacity: ${props=> props.opacity ? props.opacity : "inherit"};
  color: ${props => props.color ? props.color : "inherit"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "inherit"};
  text-transform: ${props => props.textTransform ? props.textTransform : "inherit"};
  border-bottom: ${props =>props.showUnderline ? "2px solid #000" : "none"};
  maxlength: ${props => props.inputLength ? props.inputLength : "inherit"};
`

export const StyledText = styled(Text)<IEditableInputProps>`
  font-size: ${props => props.fontSize ? props.fontSize : "inherit"};
  text-transform: ${props => props.textTransform ? props.textTransform : "inherit"};
  opacity: ${props => props.opacity ? props.opacity : "inherit"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "inherit"};
  color: ${props => props.color ? props.color : "inherit"};
`
