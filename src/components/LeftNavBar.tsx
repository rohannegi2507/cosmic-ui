import React, { useContext } from 'react'
import styled from 'styled-components'
import { COLOR_VARIABLES, COMPONENT_NAME_TO_LABEL, COMPONENT_TYPE, componentList } from '../constant'
import { MyContext } from '../MyContext'

type Props = {}

const LeftNavBar = (props: Props) => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('MyComponent must be used within a MyContextProvider');
  }

  const { setValue } = context;
  const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    padding:32px 16px;
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  `

  const ComponentsList = ()=>{
    const NavItem = styled.div`
    padding:8px 12px;
    cursor:pointer;
    font-weight:700;
    color: #686D76;
    &:hover {
      background-color: #EEEEEE;
      border-radius:8px;
      color:${COLOR_VARIABLES.TEXT_PRIMARY_COLOR};
    }
    `


    return componentList.map((item:COMPONENT_TYPE)=>{
        const handleClick  =  (item: COMPONENT_TYPE)=>{
          setValue(item)
        }
        return <NavItem onClick={()=>handleClick(item)}>{COMPONENT_NAME_TO_LABEL[item]}</NavItem>
    })
  }
  return (
    <Wrapper>
        {ComponentsList()}
    </Wrapper>
  )
}

export default LeftNavBar