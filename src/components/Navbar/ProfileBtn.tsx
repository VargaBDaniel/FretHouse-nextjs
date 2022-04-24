import React from "react"
import styled from "styled-components"
import { NavbarBtn } from "./common"

const StyledProfileBtn = styled(NavbarBtn)`
  margin-left: 20px;

  .pfp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightgray};
    margin-right: 10px;
  }

  p {
    padding-right: 10px;
  }
`

const ProfileBtn = () => {
  return (
    <StyledProfileBtn>
      <div className="pfp"></div>
      <p>Username</p>
    </StyledProfileBtn>
  )
}

export default ProfileBtn
