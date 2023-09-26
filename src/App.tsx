import React from "react"
import "./App.css"
import styled from "@emotion/styled"
import { Column } from "./components/Flex"
import TodoList from "./components/Todolist"
import SizedBox from "./components/SizeBox"
import Header from "./components/Header"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 100px;
  min-height: 100vh;
  background: #106c4e;
`

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex: 1; 
  /* box-sizing: border-box; */
  background: #ba7412;
`

function App() {
  return (
    <Root>
      <Header />
      <SizedBox height={60} />

      <Body>
        {/* <Column>
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column>
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column>
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column>
          <TodoList style={{ height: "100vh" }} />
        </Column>
        <SizedBox width={10} />
        <Column>
          <TodoList style={{ height: "100vh" }} />
        </Column> */}
        <TodoList />
        <SizedBox width={10} />
        <TodoList />
        <SizedBox width={10} />
        <TodoList />
        <SizedBox width={10} />
        <TodoList />
        <SizedBox width={10} />
        <TodoList />
      </Body>
    </Root>
  )
}

export default App
