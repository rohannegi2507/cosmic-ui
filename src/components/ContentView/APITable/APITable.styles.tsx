import styled from "styled-components"
import { COLOR_VARIABLES } from "../../../constant"

export const headers = ['Property', 'Description', 'Type', 'Default']
export const Table = styled.table`
width:80vh;
border:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR}
`

export const TableHeader = styled.th`
padding: 12px 24px;
text-align: left;
border: 1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
background-color:${COLOR_VARIABLES.DARK_BORDER_COLOR};
}
`
export const Cell = styled.td`
padding: 12px 24px;
text-align: left;
border: 1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
`

export const Type= styled.span`
color:${COLOR_VARIABLES.TEXT_PRIMARY_COLOR};
font-weight:600;
`

export const Row = styled.tr`
&:hover {
    background-color: ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
  }
`
