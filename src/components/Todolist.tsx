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
  /* width: 423px; */
  /* height: 100vh; */
  background: #f3f5f6;
  flex: 1;
  justify-content: start;
  /* align-items: center; */
  width: 100%;
   
  &  .remove-todolist-button{
    display: none;
  }

  :hover{
    &  .remove-todolist-button{
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  border: 1px solid #dadada;
  /* align-items: center; */

  & > * {
    margin-bottom: 20px;
  }

  & > :last-child{
    margin-bottom: 0;
  }
`


const TodoList: React.FC<IProps> = () => {
  // const StyledRow = styled(Row)`

  // `
  return (
    <Root>
      {/* <StyledRow> */}
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
