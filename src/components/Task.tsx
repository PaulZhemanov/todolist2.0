import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"

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
  display: inline-flex;
`


const Body = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  width: 423px;
  /* height: 100vh; */
  background: #f3f5f6;
  /* flex: 1; */
  /* align-items: center; */
  width: 100%;

  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.15);
`

const Task: React.FC<IProps> = () => {
  const TaskTitle = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  `
    
  const Description = styled(Text)`
    font-size: 16px;
    font-weight: 400;
  `
  // const StyledRow = styled(Row)`

  // `
    return (
      <Root>
        <Body>
          <TaskTitle>TASK TITLE</TaskTitle>
          
          <SizedBox height={10} />
          <Description>TASK DESCRIPTION</Description>
          <SizedBox height={40} />
        </Body>
      </Root>
    )
}
export default Task
