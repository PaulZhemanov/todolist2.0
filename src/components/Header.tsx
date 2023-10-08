import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import SizedBox from "./SizeBox"
import AddMax from "@assets/icons/AddMax.svg"
import { useStores } from "@stores"
import Task from "@components/Task"
import { TASK_STATUS, TTask, TTodolist } from "@stores/TaskStore"

interface IProps {}

const Add = styled.div`
  background: url(${AddMax});
  width: 48px; //!!!!!!!!!
  height: 48px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 40px 10px;
  align-items: flex-start;
  min-width: 980px;
  max-width: 1280px;
`
const Title = styled(Text)`
  font-size: 64px;
  font-weight: 700;
`
const SubTitile = styled(Text)`
  font-size: 40px;
  font-weight: 400;
`
const StyledRow = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const Header: React.FC<IProps> = () => {
  const { taskStore } = useStores()
  let defaultTodolist: TTodolist = {
    todolistTitle: "New todolist",
    tasks: {
      title: "New task",
      description: "Blablabla",
      status: TASK_STATUS.ACTIVE,
    },
  }
  return (
    <Root>
      <Title>Project name</Title>
      <SizedBox height={24} />

      <StyledRow>
        <SubTitile>Add new column</SubTitile>
        <Add onClick={() => taskStore.addTodolist(defaultTodolist)} />
      </StyledRow>
    </Root>
  )
}
export default Header
