import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import check from "../assets/icons/Check.svg"
import { Tag } from "./Tag"

const Bin = styled.div`
  background: url(${bin});
  width: 25px;
  height: 25px;
`
const Check = styled.div`
  background: url(${check});
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}
const Root = styled.div`
  display: flex;
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
  const StyledRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
  `
     

  return (
    <Root>
      <Body>
        <StyledRow>
          <TaskTitle>task title</TaskTitle>
          <Bin />
        </StyledRow>
        <SizedBox height={10} />
        <Description>task description</Description>
        <SizedBox height={40} />
        <StyledRow>
          <Tag>Critical</Tag>
          <Check />
        </StyledRow>
      </Body>
    </Root>
  )
}
export default Task
