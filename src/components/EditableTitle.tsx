import styled from "@emotion/styled"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { Text } from "./Text"

interface IProps {
  
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
`

const EditableTitle: React.FC<IProps> = () => {
  const [title, setTitle] = useState("Enter title")
  const [editing, setEditing] = useState(false)
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
        />
      ) : (
        <Text onDoubleClick={handleTitleClick}>{title}</Text>
      )}
    </Root>
  )
}
export default EditableTitle
