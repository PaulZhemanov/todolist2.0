import styled from "@emotion/styled"
import React from "react"
import { Text } from "./Text"
import { Row } from "./Flex"
import SizedBox from "./SizeBox"
import add from "../assets/icons/Add.svg"

interface IProps { }

const Icon = styled.div`
  width: 48px;
  height: 48px;
`
const Add = styled(Icon)`
  background: url(${add});
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 40px 10px;
  align-items: flex-start;
  /* background: #3612ba; */
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

  return (
    <Root>
      <Title>Project name</Title>
      <SizedBox height={24} />

      <StyledRow>
        <SubTitile>Add new column</SubTitile>
        <Add />
      </StyledRow>
    </Root>
  )
}
export default Header
