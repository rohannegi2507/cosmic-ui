import React, { useState } from 'react'
import { CardContainer, Container, StyledLeftIcon, StyledRightIcon } from './Slider.styles';

type OPTIONS_ITEM = {
  src:string,
  alt:string,
  id:string,
}

type SliderComponentProps = {
  options: OPTIONS_ITEM[],
}

function SliderComponent({options }: SliderComponentProps) {
  const [currentInd, setCurrentInd] = useState(0)

  const handleMove = (move:string)=>{
    if(move === 'next'){
      setCurrentInd(prevInd => prevInd === (options.length-1) ? 0 : prevInd+1)
    } else {
      setCurrentInd(prevInd => prevInd === 0 ? (options.length-1)  : prevInd-1)
    }
  }
   
  return (
    <Container>
        <StyledLeftIcon onClick={()=>handleMove("next")}/>
          <CardContainer><img />  <img src={options[currentInd].src} alt={options[currentInd].alt || ''}/></CardContainer>
        <StyledRightIcon onClick={()=>handleMove("prev")}/>
    </Container>
  )
}

export default SliderComponent