import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import SizedBox from "./SizeBox"
import add from "../assets/icons/Add.svg"

const Icon = styled.div`
  width: 48px;
  height: 48px;
 
`
const Add = styled(Icon)`
  background: url(${add});
`
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  padding: 10px 10px 40px 10px;
  align-items: flex-start;
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
     const Rt = styled(Row)`
       justify-content: space-between;
       align-items: center;
     `


    return (
      <Root>
        <Title>Project name</Title>
        <SizedBox height={24} />

        <Rt>
          <SubTitile>Add new column</SubTitile>
          <Add />
        </Rt>
      </Root>
    )
   
}
export default Header
