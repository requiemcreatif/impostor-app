import React from 'react'
import styled from "styled-components"
import logo from "../img/Logo.svg"

const Navbar = () => {

    const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10rem 5rem;

    `
    const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 4rem;
    `


    const MenuList = styled.li`
    list-style-type: none;
    `
    const Anchor = styled.a`
    text-decoration: none;
    color: #E0F4FF;
    `
    const Btn = styled.button`
    border: solid 1px #CDF72B;
    background-color: #CDF72B;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    font-size: 1.5rem;
    color: black;
    `



  return (
    <Nav>
        <img src={logo} className="impostr-log" alt="logo" />
        <NavList>
            <MenuList><Anchor href="">Home</Anchor></MenuList>
             <MenuList><Anchor href="">Information</Anchor></MenuList>
             <MenuList><Anchor href="">Help</Anchor></MenuList>
             <MenuList><Anchor href="">Contact</Anchor></MenuList>
             <Btn>Sign In</Btn>
         </NavList>
     </Nav>
  )
}

export default Navbar