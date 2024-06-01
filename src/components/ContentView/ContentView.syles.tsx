import styled from "styled-components"
import { COLOR_VARIABLES } from "../../constant"

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding-right:48px;
padding-left:48px;
gap:24px;
`
export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  border:1px solid grey;
  padding:16px 24px;
  width:40vh;
  height:300px;
  border:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
`

export const Header = styled.div`
display:flex;
color: ${COLOR_VARIABLES.TEXT_PRIMARY_COLOR};  
`

export const SubHeader = styled.h2`
display:flex;
color: ${COLOR_VARIABLES.TEXT_PRIMARY_COLOR};  
`
