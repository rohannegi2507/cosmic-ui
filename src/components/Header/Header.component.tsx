import React from 'react'
import styled from 'styled-components'

const Header = () => {
  const Heading = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding:0 24px;
  font-family: "Bungee Spice", sans-serif;
  font-weight: 400;
  font-style: normal;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
  `

  return (
    <Heading>
         <h2>Cosmic</h2>
    </Heading>
  )
}

export default Header
