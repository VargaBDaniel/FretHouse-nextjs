import React from "react"
import styled from "styled-components"
import MenuBtn from "./MenuBtn"
import ProfileBtn from "./ProfileBtn"

const StyledNavbar = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.midgray};
  user-select: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 80px;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <ProfileBtn />
      <MenuBtn />
    </StyledNavbar>
  )
}

export default Navbar
