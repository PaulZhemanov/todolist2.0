import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
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

const Title = styled(Text)`
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
  return (
    <Root>
      <HeaderContainer>
        <Title>Frontend</Title>
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
