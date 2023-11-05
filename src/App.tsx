import React from "react"
import "./App.css"
import styled from "@emotion/styled"
import Header from "@components/Header"
import { useStores } from "@stores"
import Todolist from "./components/Todolist"
import { TTodolist } from "@stores/TaskStore"
import { observer } from "mobx-react"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 100px;
  box-sizing: border-box;
  height: 100vh;
  align-items: start;
`
const Body = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 10px;
  flex: 1;
  gap:20px
`
const App: React.FC = observer(() => {
  const { taskStore } = useStores()

  return (
    <Root>
      <Header/>
      <Body>
        {taskStore.todolists.map((todolist) => (
          <Todolist
            key={todolist.id}
            todolist={todolist}
            onEdit={(todolist: TTodolist) =>
              taskStore.editTodolist(todolist.id, todolist.title)
            }
          />
        ))}
      </Body>
    </Root>
  )
})

export default App
