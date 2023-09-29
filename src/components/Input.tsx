import styled from "@emotion/styled"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { Text } from "./Text"

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const TaskTitle = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`
const EditableTaskTitle = styled.input`
  font-size: 28px;
  font-weight: 600;
  opacity: 0.8;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
`

const Input: React.FC<IProps> = () => {
  const [editing, setEditing] = useState(false)
  const [taskTitle, setTaskTitle] = useState("Enter task title")

  const inputRef = useRef<HTMLInputElement>(null)
  const handleTaskTitleClick = () => {
    setEditing(true)
  }

  const handleTaskTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event?.target.value)
  }
  const handleTaskTitleFix = () => {
    setEditing(false)
  }
  const handleTaskTitleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setEditing(false)
    }
  }
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      const length = taskTitle.length
      inputRef.current.setSelectionRange(length, length)
    }
  }, [editing, taskTitle])

  return (
    <Root>
      {editing ? (
        <EditableTaskTitle
          ref={inputRef}
          value={taskTitle}
          onChange={handleTaskTitleChange}
          onBlur={handleTaskTitleFix}
          onKeyDown={handleTaskTitleKeyDown}
        />
      ) : (
        <TaskTitle onDoubleClick={handleTaskTitleClick}>{taskTitle}</TaskTitle>
      )}
    </Root>
  )
}
export default Input
