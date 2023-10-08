import styled from "@emotion/styled"
import React from "react"
import bin from "@assets/icons/Bin.svg"
import SizedBox from "./SizeBox"
import Task from "./Task"
import EditableTitle from "./EditableTitle"
import { useStores } from "@stores"
import { observer } from "mobx-react"
import AddMin from "@assets/icons/AddMin.svg"
import { TASK_STATUS, TTask, TTodolist } from "@src/stores/TaskStore"

const Bin = styled.div`
  background: url(${bin});
  width: 25px;
  height: 25px;
`
const Add = styled.div`
  background: url(${AddMin});
  width: 25px; //!!!!!!!!!
  height: 25px;
`

interface IProps {
  onEdit: (todolist: TTodolist) => void
  onRemove: () => void
  todolist: TTodolist
  index: number
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 40px 25px;
  background: #f3f5f6;
  justify-content: space-between;
  width: fit-content;

  & .remove-todolist-button {
    display: none;
  }

  :hover {
    & .remove-todolist-button {
      display: block;
    }
  }
`

const HeaderContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 373px;
  height: fit-content
`

const TasksContainer = styled.div`
  display: inline-flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 100%;

  & > * {
    margin-bottom: 20px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

const TodoList: React.FC<IProps> = observer(({index}) => {
  const { taskStore } = useStores()
  let defaultTask: TTask = {
    taskTitle: "New task",
    description: "Blablabla",
    status: TASK_STATUS.ACTIVE,
  }
  return (
    <Root>
      <HeaderContainer>
        <EditableTitle
          startTaskTitle="Enter task title" 
          color="#d71919"
          fontSize="28px"
          fontWeight="600"
          opacity="0.7"
          showUnderline
          inputLength={20}
        />
        <Add onClick={() => taskStore.addTask(defaultTask)} />
        <Bin
          className="remove-todolist-button"
          onClick={() => taskStore.removeTodolist(index)}
        />
      </HeaderContainer>
      <SizedBox height={20} />
      <TasksContainer>
        {taskStore.tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onEdit={(task) => taskStore.editTask(index, task)}
            onRemove={() => taskStore.removeTask(index)}
          />
        ))}
      </TasksContainer>
    </Root>
  )
})
export default TodoList
