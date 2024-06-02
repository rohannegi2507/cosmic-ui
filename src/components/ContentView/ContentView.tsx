import React, { useContext, useEffect, useState } from 'react'
import {  COMPONENT_DATA, COMPONENT_TYPE, items, SLIDER_IMAGES_DATA } from '../../constant'
import SliderComponent from '../Slider/Slider.component'
import { MyContext } from '../../MyContext'
import AutoCompleteComponent from '../AutoComplete/AutoComplete.component'
import { Container, Header, Section, SubHeader, Wrapper } from './ContentView.syles'
import APITable from './APITable/APITable'

type Props = {}

export const componentData:Record<COMPONENT_TYPE, COMPONENT_DATA > = {
    slider:{
     title: "Slider",
     description:"The Slider component allows users to select a value from a range by dragging a thumb along a track. It supports customization options like steps, orientation, labels, and marks, ensuring flexibility for various use cases. The component is also accessible, offering keyboard navigation and screen reader support.",
     component:<SliderComponent options={SLIDER_IMAGES_DATA} itemsNo={5}></SliderComponent>,
     componentAPI:[
      {property:'options',description:'Select options. Will get better perf than jsx definition', type:"{label,value}[]}" },
      {property:'itemsNo',description:'Show number of card items inside slider', type:"number", default:1 }]
    }
    ,
    autocomplete:{
     title: "Autocomplete",
     description:"The Autocomplete component enables users to quickly find and select options from a dropdown list as they type. It supports features like customizable suggestions, keyboard navigation, and async data fetching, making it suitable for various search and selection scenarios. The component is also accessible, providing support for screen readers and keyboard interactions.",
     component: <AutoCompleteComponent options={items}></AutoCompleteComponent>,
     componentAPI:[{property:'options',description:'Select options. Will get better perf than jsx definition', type:"{label,value}[]}" }]   
 }
}

const getUIComponentData = (componentName:COMPONENT_TYPE)=>{
  if(componentData[componentName]){
     return componentData[componentName]
  }
}

const ContentView = (props: Props) => {
  const context = useContext(MyContext);
  const [currentComponentData, setCurrentComponentData] =  useState<COMPONENT_DATA>();

  
  if (!context) {
    throw new Error('MyComponent must be used within a MyContextProvider');
  }

  const { value } = context;

  useEffect(()=>{
    setCurrentComponentData(getUIComponentData(value))
  },[value])

 if(!currentComponentData){
   return <h1>Not found</h1>
 }

  return (
    <Wrapper>
      <Header>
        <h1>{currentComponentData.title}</h1>
      </Header>
       <section>
        <p> {currentComponentData.description} </p>
       </section>
      <Section>
        <SubHeader>Examples</SubHeader>
        <Container>
          { currentComponentData.component}
        </Container>
        <APITable data={currentComponentData.componentAPI}></APITable>
      </Section>
    </Wrapper>
  )
}

export default ContentView
