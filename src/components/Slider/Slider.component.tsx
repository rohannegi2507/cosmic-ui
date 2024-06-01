import React, { useState } from 'react'
import { CardContainer, Container, StyledLeftIcon, StyledRightIcon } from './Slider.styles';

const data = [{
  "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5ODE4MTY2NV5BMl5BanBnXkFtZTgwMzM2NzEzMDI@._V1_UY209_C R0,0,140,209_AL_.jpg",
  "alt":"Collateral Beauty (2016) Poster"
  },
  {
  "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDA1NjcwN15BMl5BanBnXkFtZTgwMDY0MDA2MDI@._V1_UY209_C R0,0,140,209_AL_.jpg",
  "alt":"A Kind of Murder (2016) Poster"
  },
  {
  "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MzgyNTIzMF5BMl5BanBnXkFtZTgwODg1OTY1MDI@._V1_UX140_C R0,0,140,209_AL_.jpg",
   "alt":"Solace (2015) Poster"
   },
   {
   "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTg0Nzc1NjA0MV5BMl5BanBnXkFtZTgwNTcyNDQ0MDI@._V1_UX140_C R0,0,140,209_AL_.jpg",
  "alt":"Fences (2016) Poster"
   },
   {
   "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
   "alt":"Manchester by the Sea (2016) Poster"
   },
   {
   "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UY209_CR0,0,140,209_AL_.jpg",
   "alt":"Moana (2016) Poster"
  }]

const SliderComponent = () => {
  const [currentInd, setCurrentInd] = useState(0)
 
  const generateImg = ()=>{
    return data.map((img)=>{
      return  <CardContainer><img />  <img src={img.src} alt={img.alt}/></CardContainer>
    })
  }

  const handleMove = (move:string)=>{
    if(move === 'next'){
      setCurrentInd(prevInd => prevInd === (data.length-1) ? 0 : prevInd+1)
    } else {
      setCurrentInd(prevInd => prevInd === 0 ? 5 : prevInd-1)
    }
  }
   
  return (
    <Container>
        <StyledLeftIcon onClick={()=>handleMove("next")}/>
          <CardContainer><img />  <img src={data[currentInd].src} alt={data[currentInd].alt}/></CardContainer>
        <StyledRightIcon onClick={()=>handleMove("prev")}/>
    </Container>
  )
}

export default SliderComponent