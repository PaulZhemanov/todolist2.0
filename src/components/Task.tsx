import styled from "@emotion/styled"
import React from "react"
import bin from "@assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import check from "@assets/icons/Check.svg"
import { Tag } from "./Tag"
import { Row } from "./Flex"
import EditableTitle from "./EditableTitle"
import { TTask } from "@stores/TaskStore"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
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

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 333px;
  `

interface IProps {
  task: TTask
  onEdit: (task: TTask) => void
  onRemove: () => void
}
const Task: React.FC<IProps> = ({ task, onRemove, onEdit }) => {
  
  return (
    <Root>
      <StyledRow>
        <EditableTitle
          startTaskTitle={task.taskTitle}
          fontSize="20px"
          fontWeight="700"
          textTransform="uppercase"
          color="#363636"
          showUnderline
          inputLength={20}
          onChange={(taskTitle) => onEdit({ ...task, taskTitle })}
        />
        <Bin className="remove-task-button" onClick={onRemove} />
      </StyledRow>
      <SizedBox height={10} />
      <EditableTitle
        startTaskTitle={task.description}
        color="#1cd719"
        fontSize="16px"
        fontWeight="400"
        inputLength={40}
        onChange={(description) => onEdit({ ...task, description })}
      />
      <SizedBox height={40} />
      <StyledRow>
        <Tag>Critical</Tag>
        <Check className="check-button" />
      </StyledRow>
    </Root>
  )
}

export default Task
