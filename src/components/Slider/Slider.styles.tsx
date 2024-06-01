import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import styled from "styled-components";
import { COLOR_VARIABLES } from "../../constant";

export const BaseIcon = styled.div`
width: 60px;
height: 60px;
color: ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
&:hover {
    color: ${COLOR_VARIABLES.DARK_BORDER_COLOR};
}
`;

export const StyledLeftIcon = styled(RiArrowRightWideLine)`
width: 60px;
height: 60px;
color: ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
&:hover {
    color: ${COLOR_VARIABLES.DARK_BORDER_COLOR};
}
`;

export const StyledRightIcon = styled(RiArrowLeftWideLine)`
width: 60px;
height: 60px;
color: ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
&:hover {
    color: ${COLOR_VARIABLES.DARK_BORDER_COLOR};
}
`;

export const CardContainer = styled.div`
border:1px solid #EEEEEE;
`

export const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`