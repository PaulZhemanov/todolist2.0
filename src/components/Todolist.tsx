import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"

const Icon = styled.div`
  width: 18px;
  height: 20px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Bin = styled(Icon)`
  background: url(${bin}) center no-repeat;
  background-position: center;
`

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`

const TodoList: React.FC<IProps> = () => {
 
  const Title = styled(Text)`
    font-size: 28px;
    font-weight: 600;
    opacity: 0.8;
  `
  return (
    <Root>
      <Row>
      <Title>Frontend</Title>
        <div><Bin /></div>
        
      </Row>
    </Root>
  )
}
export default TodoList
