import styled from 'styled-components'
import { COLOR_VARIABLES } from '../../constant'

export const DropDownItem = styled.div`
    padding: 8px;
    border-bottom:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
    &:hover {
    background-color: #e7eaf6;
    }
`

export const IconBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
