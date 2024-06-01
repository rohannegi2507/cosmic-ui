import React from 'react'
import styled from 'styled-components'
import { COLOR_VARIABLES } from '../constant'
import SliderComponent from '../components/Slider/Slider.component'


type Props = {}

const Slider = (props: Props) => {

  const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding-right:48px;
  padding-left:48px;
  gap:24px;
  `
  const Container = styled.div`
    display:flex;
    border:1px solid grey;
    padding:16px 24px;
    width:40vh;
    height:300px;
    border:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
  `

  const Header = styled.div`
  display:flex;
  `

  const items = [
    { id: "1", label: "Item1", value: "item1" },
     { id: "2", label: "Item2", value: "item2" },
     { id: "3", label: "Item3", value: "item3" }]
  return (
    <Wrapper>
      <Header>
        <h1>Slider</h1>
      </Header>
       <section>
        <p> A dropdown menu for displaying choices. </p>
       </section>
      <section>
        <h3>Examples</h3>
        <Container>
           <SliderComponent />
        </Container>
      </section>
    </Wrapper>
  )
}

export default Slider
