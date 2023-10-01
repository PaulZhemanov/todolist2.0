import styled from "@emotion/styled"
import React from "react"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import Task from "./Task"
import EditableTitle from "./EditableTitle"

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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 373px;
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
  return (
    <Root>
      <HeaderContainer>
        <EditableTitle
          color="#d71919"
          fontSize="28px"
          fontWeight="600"
          opacity="0.7"
          showUnderline={true}
        />
        <Bin className="remove-todolist-button" />
      </HeaderContainer>
      <SizedBox height={20} />
      <TasksContainer>
        <Task />
        <Task />
        <Task />
      </TasksContainer>
    </Root>
  )
}
export default TodoList
