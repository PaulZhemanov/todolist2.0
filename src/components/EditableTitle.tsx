import styled from "@emotion/styled"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import {
  IEditableInputProps,
  StyledInput,
  StyledText,
} from "@components/StyledInput"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 27px;
  `
interface IProps extends IEditableInputProps {
onChange?: (str: string) => void
title?: string
}

const EditableTitle: React.FC<IProps> = ({
  fontSize,
  color,
  fontWeight,
  textTransform,
  showUnderline = false,
  opacity,
  title = "",
  inputLength,
  ...rest
}) => {
  const [editing, setEditing] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTitleClick = () => {
    setEditing(true)
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    rest.onChange && rest.onChange(event?.target.value ?? "")
  }

  const handleTitleFix = () => {
    if (title.trim() !== "") {
      setEditing(false)
    }
  }

  const handleTitleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      handleTitleFix()
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
          maxLength={inputLength}
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
