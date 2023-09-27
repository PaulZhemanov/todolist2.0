import styled from "@emotion/styled"
import React, { ChangeEvent, useState } from "react"
import { Text } from "./Text"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import Task from "./Task"

const Bin = styled.div`
  background: url(${bin});
  width: 25px;
  height: 25px;
`

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 40px 25px;
  background: #f3f5f6;
  justify-content: space-between;
  width: 100%;

  & .remove-todolist-button {
    display: none;
  }

  :hover {
    & .remove-todolist-button {
      display: block;
    }
  }
`

const TodoListTitle = styled(Text)`
  font-size: 28px;
  font-weight: 600;
  opacity: 0.8;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TasksContainer = styled.div`
  display: inline-flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 100%;

  & > * {
    margin-bottom: 20px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

const TodoList: React.FC<IProps> = () => {
  const [todolistTitle, setTodolistTitle] = useState("Frontend")
  const [editing, setEditing] = useState(false)

  const handleTodolistTitleClick = () => {
    setEditing(true)
  }

  const handleTodolistTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodolistTitle(event?.target.value)
  }
  const handleTodolistTitleFix = () => {
    setEditing(false)
  }

  return (
    <Root>
      <HeaderContainer>
        {editing ? (
          <input
            type="text"
            value={todolistTitle}
            onChange={handleTodolistTitleChange}
            onBlur={handleTodolistTitleFix}
          />
        ) : (
          <TodoListTitle onClick={handleTodolistTitleClick}> {todolistTitle}</TodoListTitle>
        )}

        <Bin className="remove-todolist-button" />
      </HeaderContainer>
      <SizedBox height={10} />
      <TasksContainer>
        <Task />
        <Task />
        <Task />
      </TasksContainer>
    </Root>
  )
}
export default TodoList
