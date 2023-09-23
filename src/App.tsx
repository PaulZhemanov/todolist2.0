import React from "react"
import "./App.css"
import styled from "@emotion/styled"
import { Column } from "./components/Flex"
import TodoList from "./components/Todolist"
import SizedBox from "./components/SizeBox"
import Header from "./components/Header"

const Root = styled.div`
  display: flex;
  padding: 52px 100px;
  align-items: flex-start;
  flex-direction: column;
  max-width: 100%;
  min-width: 1440px;
  max-height: 100vh;
  
`

const Body = styled.div`
  display: flex;
  flex-direction: row;

  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  max-height: 1024px;
  height: 100%;
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
`

function App() {
  return (
    <Root>
      <Header />
      <SizedBox height={60} />

      <Body>
        <Column style={{ flex: 1 }} >
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column style={{ flex: 1 }}>
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column style={{ flex: 1 }}>
          <TodoList style={{ height: "100vh" }} />
        </Column>{" "}
        <SizedBox width={10} />
        <Column style={{ flex: 1 }}>
          <TodoList style={{ height: "100vh" }} />
        </Column>
        <SizedBox width={10} />
        <Column style={{ flex: 1 }}>
          <TodoList style={{ height: "100vh" }} />
        </Column>
      </Body>
    </Root>
  )
}

export default App
