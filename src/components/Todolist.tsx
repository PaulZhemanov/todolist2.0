import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"

const Icon = styled.div``
const Bin = styled(Icon)`
  background: url(${bin});
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #000;
`

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 25px 40px 25px;
  width: 423px;
  height: 100vh;
  background: #f3f5f6;
`

const TodoList: React.FC<IProps> = ({ style }) => {
  const Title = styled(Text)`
    font-size: 28px;
    font-weight: 600;
    opacity: 0.8;
  `
  const StyledRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
    width: 373px;
  `
  return (
    <Root style={style}>
      <StyledRow>
        <Title>Frontend</Title>
        <Bin />
      </StyledRow>
    </Root>
  )
}
export default TodoList
