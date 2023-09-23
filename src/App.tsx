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
  box-sizing: border-box;
  max-width: 100%;
  min-width: 1440px;
  min-height: 100vh;
  padding-bottom: 0;
  justify-content: flex-start;
  flex-shrink: 0;

  // border: 10px solid #574ef1;
  // background: 313131;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;

  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  max-height: 1024px;
  height: 100%;
  padding: 18px;
  flex: 1;
  box-sizing: border-box;
`

function App() {
  return (
    <Root>
      <Header />
      <SizedBox height={60} />

      <Body>
        <Column style={{ flex: 1 }} mainAxisSize="stretch" crossAxisSize="max">
          <TodoList style={{ height: 270 }} />
        </Column>{" "}
        <SizedBox width={22} />
        <Column style={{ flex: 1 }} mainAxisSize="stretch" crossAxisSize="max">
          <TodoList style={{ height: 270 }} />
        </Column>{" "}
        <SizedBox width={22} />
        <Column style={{ flex: 1 }} mainAxisSize="stretch" crossAxisSize="max">
          <TodoList style={{ height: 270 }} />
        </Column>{" "}
        <SizedBox width={22} />
        <Column style={{ flex: 1 }} mainAxisSize="stretch" crossAxisSize="max">
          <TodoList style={{ height: 270 }} />
        </Column>
        <Column style={{ flex: 1 }} mainAxisSize="stretch" crossAxisSize="max">
          <TodoList style={{ height: 270 }} />
        </Column>
      </Body>
    </Root>
  )
}

export default App
