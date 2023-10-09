import React from "react"
import "./App.css"
import styled from "@emotion/styled"
import SizedBox from "@components/SizeBox"
import Header from "@components/Header"
import { useStores } from "./stores"
import Todolist from "./components/Todolist"
import { TTodolist } from "./stores/TaskStore"
import { observer } from "mobx-react"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 0;
  box-sizing: border-box;
  height: 100vh;
  align-items: center;
`

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 0 10px;
  flex: 1;
  min-width: 980px;
  max-width: 1280px;
`

const App: React.FC = observer(() => {
  const { taskStore } = useStores()
  
  return (
    <Root>
      <Header />
      <Body>
        {taskStore.todolists.map((todolist, indexTodolist) => (
          <Todolist
            key={indexTodolist}
            todolist={todolist}
            onEdit={(todolist: TTodolist) =>
              taskStore.editTodolist(todolist.id, todolist.title)
            }
            indexTodolist={indexTodolist}
          />
        ))}
      </Body>
    </Root>
  )
})

export default App
