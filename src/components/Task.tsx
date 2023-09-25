import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}

const Icon = styled.div``

const Bin = styled(Icon)`
  background: url(${bin});
  width: 25px;
  height: 25px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background: #f3f5f6;
  width: 100%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.15);
`

const TaskTitle = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  `

const Description = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
  `

const Task: React.FC<IProps> = ({ ...props }) =>
  <Root {...props}>
    <TaskTitle>TASK TITLE</TaskTitle>
    <Description>TASK DESCRIPTION</Description>
  </Root>

export default Task
