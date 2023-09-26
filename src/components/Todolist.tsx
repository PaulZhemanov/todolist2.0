import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import Task from "./Task"

const Icon = styled.div``
const Bin = styled(Icon)`
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
  width: 423px;
  height: 100vh;
  background: #f3f5f6;
  flex: 1;
  justify-content: start;
  /* align-items: center; */
  width: 100%;
`

const TodoList: React.FC<IProps> = () => {
  const Title = styled(Text)`
    font-size: 28px;
    font-weight: 600;
    opacity: 0.8;
  `
  const StyledRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
  `
  return (
    <Root>
      <StyledRow>
        <Title>Frontend</Title>
        <Bin />
      </StyledRow>
      <SizedBox height={20} />
      <Task />
      <SizedBox height={20} />
      <Task />
      {/* <SizedBox height={20} />
      <Task />
      <SizedBox height={20} />
      <Task />
      <SizedBox height={20} /> */}
    </Root>
  )
}
export default TodoList
