import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import SizedBox from "./SizeBox"

import add from "../assets/icons/Add.svg"

const Icon = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Add = styled(Icon)`
  background: url(${add}) center no-repeat;
`
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Header: React.FC<IProps> = () => {

    const Title = styled(Text)`
      font-size: 64px;
      font-weight: 700;
      font-family: Open Sans;
    `
    const SubTitile = styled(Text)`
      font-size: 40px;
      font-weight: 400;
      font-family: Open Sans;
    `


    return (
      <Root>
        <Title>Project name</Title>
        <SizedBox height={24} />

        <Row>
          <SubTitile>Add new column</SubTitile>
          <Add />
        </Row>
      </Root>
    )
   
}
export default Header
