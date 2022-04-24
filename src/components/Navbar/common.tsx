import styled from "styled-components"

export const NavbarBtn = styled.button`
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 5px;
  border-radius: 7.5px;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent85};
  }
`
