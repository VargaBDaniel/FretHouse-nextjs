import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { NavbarBtn } from "./common"

const StyledMenuBtn = styled(NavbarBtn)`
  margin-right: 20px;
  padding-left: 10px;
  p {
    margin-right: 10px;
  }
`

const MenuBtn = () => {
  return (
    <StyledMenuBtn>
      <p>Menu</p>
      <FontAwesomeIcon icon={faCaretDown} />
    </StyledMenuBtn>
  )
}

export default MenuBtn
