import React, { useState } from 'react'
import { CardContainer, Container, Img, StyledLeftIcon, StyledRightIcon } from './Slider.styles';

type OPTIONS_ITEM = {
  src:string,
  alt:string,
  id:string,
}

type SliderComponentProps = {
  options: OPTIONS_ITEM[],
  itemsNo: number,
}

function SliderComponent({options, itemsNo = 1}: SliderComponentProps) {
  const [currentInd, setCurrentInd] = useState(0)

  const handleMove = (move:string)=>{
    if(move === 'next'){
      setCurrentInd(prevInd => prevInd === (options.length - itemsNo) ? 0 : prevInd+1)
    } else if (move === 'prev') {
      setCurrentInd(prevInd => prevInd === 0 ? (options.length - itemsNo)  : prevInd-1)
    }
  }

  const generateCard = ()=>{
    let imgCards = []

    for(let i = 0 ;i < itemsNo ; i++){
      imgCards.push(<Img src={options[currentInd + i].src} alt={options[currentInd + i].alt || ''}/>)
    }
    return imgCards
  }
   
  return (
    <Container>
        <StyledLeftIcon onClick={()=>handleMove("next")}/>
          <CardContainer>
            { generateCard() }
          </CardContainer>
        <StyledRightIcon onClick={()=>handleMove("prev")}/>
    </Container>
  )
}

export default SliderComponent