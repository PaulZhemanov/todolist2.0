import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import bin from "../assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import check from "../assets/icons/Check.svg"
import { Tag } from "./Tag"
import { Row } from "./Flex"
import EditableTitle from "./EditableTitle"

interface IProps {
  align?: "row" | "column"
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 423px;
  background: #f3f5f6;

  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.15);

  & .remove-task-button,
  & .check-button {
    display: none;
  }

  :hover {
    & .remove-task-button,
    & .check-button {
      display: block;
    }
  }
`


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

const Description = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`
const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

const Task: React.FC<IProps> = () => {
  return (
    <Root>
      <StyledRow>
        <EditableTitle/>
        <Bin className="remove-task-button" />
      </StyledRow>
      <SizedBox height={10} />
      <Description>task description</Description>
      <SizedBox height={40} />
      <StyledRow>
        <Tag>Critical</Tag>
        <Check className="check-button" />
      </StyledRow>
    </Root>
  )
}

export default Task
