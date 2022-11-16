import React from 'react'
import Navbar from '../components/Navbar'
import logo from "../img/Logo.svg"
import styled from "styled-components"
import Herobanner from '../components/Herobanner'

const Home = () => {


    
  return (<>
            {/* Header - navigation */}
            <div className="header-wrapper">
            <header>
                <Navbar />
            </header>
            {/* hero - banner */}
            <Herobanner />
            </div>
            
            {/* Main */}
            <main>

            </main>
  </>
    
  )
}

export default Home