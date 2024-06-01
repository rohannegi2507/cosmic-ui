export const COLOR_VARIABLES = {
    LIGHT_BORDER_COLOR: "#EEEEEE",
    DARK_BORDER_COLOR: "#00000040",
    TEXT_PRIMARY_COLOR: "#FF5F00",
}

export type COMPONENT_TYPE = 'slider' | 'autocomplete'


export const items = [
    { id: "1", label: "Item1", value: "item1" },
     { id: "2", label: "Item2", value: "item2" },
     { id: "3", label: "Item3", value: "item3" }]

export type COMPONENT_DATA = {
    title:string,
    description:string,
    component:JSX.Element,
}

export const COMPONENT_NAME_TO_LABEL = {
    'slider':'Slider',
    'autocomplete': 'Autocomplete'    
}

export const componentList:COMPONENT_TYPE[] =  ['autocomplete',  'slider' ]