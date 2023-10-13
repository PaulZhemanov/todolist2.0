import React from "react"
import "./App.css"
import styled from "@emotion/styled"
import TodoList from "@components/Todolist"
import SizedBox from "@components/SizeBox"
import Header from "@components/Header"

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

function App() {
  return (
    <Root>
      <Header />
      <Body>
        <TodoList />
        {/*<SizedBox width={10} />*/}
        {/*<TodoList />*/}
        {/*<SizedBox width={10} />*/}
        {/*<TodoList />*/}
      </Body>
    </Root>
  )
}

export default App
