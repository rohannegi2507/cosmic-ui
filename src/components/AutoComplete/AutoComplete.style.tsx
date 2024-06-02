import styled from 'styled-components'
import { COLOR_VARIABLES } from '../../constant'

export const DropDownItem = styled.div`
    padding: 8px;
    border-bottom:1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
    background-color: ${(props) => {
      return props['aria-selected'] ? COLOR_VARIABLES.SELECTED_BG_COLOR : 'transparent'
    }};
    &:hover {
    background-color: #e7eaf6;
    }
`

export const IconBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

type WidthProps = {
    width?: number;
};

export const Wrapper = styled.div<WidthProps>`
    position: relative;
    width: ${(props) => (props.width ? `${props.width}px` : '180px')};
  `;

export const DropdownBox = styled.div<WidthProps>`
    position: absolute;
    z-index: 1;
    border: 1px solid ${COLOR_VARIABLES.LIGHT_BORDER_COLOR};
    width: ${(props) => (props.width ? `${props.width}px` : '180px')};
    border-radius: 5px;
  `;

  export const Container = styled.div<WidthProps>`
    width: ${(props) => (props.width ? `${props.width}px` : '180px')};
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid ${COLOR_VARIABLES.DARK_BORDER_COLOR};
    &:hover {
      border: 1px solid  ${COLOR_VARIABLES.TEXT_PRIMARY_COLOR};
    }
    display: flex;
    cursor: pointer;
  `;

  export const InputBox = styled.input<WidthProps>`
    width: ${(props) => (props.width ? `${props.width}px` : '140px')};
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    border: none;
    display: flex;
    cursor: pointer;
    &:focus-visible {
      outline: none;
    }
  `;
