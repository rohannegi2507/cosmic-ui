import React, {  useState } from 'react'
import styled from 'styled-components'
import { COLOR_VARIABLES } from '../../constant'
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropDownItem, IconBox } from './AutoComplete.style';

type OPTIONS_ITEM = {
  label:string,
  value:string|number,
  id:string,
}

type Props = {
    options: OPTIONS_ITEM[],
    width?:number,
}

function AutoCompleteComponent({options,width }: Props) {
  const [showDropDown, setShowDropdown] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const WIDTH = 150

  const Wrapper = styled.div`
  position: relative;
  width:${width ?  width : WIDTH}px;
  `

  const DropdownBox =  styled.div`
  position: absolute;
  z-index:1;
  border:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
  width:${width ?  width : WIDTH}px;
  border-radius:5px;
  `

  const Container = styled.div`
  width:${width ?  width : WIDTH}px;
  border-radius:5px;
  padding:8px;
  font-size:16px;
  border:1px solid ${COLOR_VARIABLES.DARK_BORDER_COLOR};
  &:hover {
    border:1px solid #38598b;
  }
  display:flex;
  `

  const InputBox = styled.input`
  width:${width ?  width : 120}px;
  border-radius:5px;
  padding:8px;
  font-size:16px;
  border:none;
  display:flex;
  &:focus-visible {
    outline: none;
  }
  `

  const DisplayDropdown =  ()=>{
    const handleSelectedItem = (value:string)=> {
      setSelectedValue(value)
      
      setShowDropdown(false)
    }

    return options.map((item:OPTIONS_ITEM)=>{
      return <DropDownItem onClick={()=>{handleSelectedItem(item.label)}} key={item.id}>{item.label}</DropDownItem>
    })
  }

  return (
    <Wrapper>
      <Container onClick={()=>setShowDropdown(!showDropDown)}>
        <InputBox value={selectedValue} ></InputBox>
        <IconBox><RiArrowDropDownLine size={24}/></IconBox>
        
      </Container>
    
      {showDropDown && <DropdownBox className='dropdown-results-box'>
        {DisplayDropdown() }
      </DropdownBox> }
    </Wrapper>
  )
}

export default AutoCompleteComponent
