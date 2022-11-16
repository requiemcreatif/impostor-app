import React from 'react'
import styled from "styled-components"

function Herobanner() {

    const Hero = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   gap: 4rem;
   text-align: left;
    `

    const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
    color: #E0F4FF;
    `
    const Btn = styled.button`
    border: solid 1px #CDF72B;
    background-color: transparent;
    width: 300px;
    height: 80px;
    border-radius: 5px;
    font-size: 3.5rem;
    color: #CDF72B;
    `


  return (
    <Hero>
        <h1 className='main-title'>THE IMPOSTR</h1>
        <Paragraph>Don’t be afraid of failing <br />
        Lorem Ipsum is simply dummy text!
        </Paragraph>
        <Btn> Sign In</Btn>
    </Hero>
  )
}

export default Herobanner