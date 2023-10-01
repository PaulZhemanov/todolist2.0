import styled from "@emotion/styled"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { Text } from "./Text"

interface IProps {
  fontSize?: string
  color?: string
  fontWeight?: string
  textTransform?: string
  showUnderline?: boolean
  opacity?: string
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled.input<IProps>`
  border: none;
  outline: none;
  background: transparent;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  opacity: ${(props) => (props.opacity ? props.opacity : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "inherit"};
  border-bottom: ${(props) =>
    props.showUnderline ? "2px solid #000" : "none"};
`

const StyledText = styled(Text)<IProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "inherit"};
  opacity: ${(props) => (props.opacity ? props.opacity : "inherit")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
`

const EditableTitle: React.FC<IProps> = ({
  fontSize,
  color,
  fontWeight,
  textTransform,
  showUnderline = false,
  opacity,
}) => {
  const [title, setTitle] = useState<string>("Enter title")
  const [editing, setEditing] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTitleClick = () => {
    setEditing(true)
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.target.value)
  }

  const handleTitleFix = () => {
    setEditing(false)
  }

  const handleTitleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setEditing(false)
    }
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      const length = title.length
      inputRef.current.setSelectionRange(length, length)
    }
  }, [editing, title])
  return (
    <Root>
      {editing ? (
        <StyledInput
          ref={inputRef}
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleFix}
          onKeyDown={handleTitleKeyDown}
          fontSize={fontSize}
          color={color}
          fontWeight={fontWeight}
          textTransform={textTransform}
          showUnderline={showUnderline}
          opacity={opacity}
        />
      ) : (
        <StyledText
          onDoubleClick={handleTitleClick}
          fontSize={fontSize}
          textTransform={textTransform}
          opacity={opacity}
          fontWeight={fontWeight}
          color={color}
        >
          {title}
        </StyledText>
      )}
    </Root>
  )
}
export default EditableTitle
