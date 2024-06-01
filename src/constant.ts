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

export const SLIDER_IMAGES_DATA = [{
    "id":"id-1",
    "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5ODE4MTY2NV5BMl5BanBnXkFtZTgwMzM2NzEzMDI@._V1_UY209_C R0,0,140,209_AL_.jpg",
    "alt":"Collateral Beauty (2016) Poster"
    },
    {
    "id":"id-2",
    "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDA1NjcwN15BMl5BanBnXkFtZTgwMDY0MDA2MDI@._V1_UY209_C R0,0,140,209_AL_.jpg",
    "alt":"A Kind of Murder (2016) Poster"
    },
    {
    "id":"id-3",
    "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MzgyNTIzMF5BMl5BanBnXkFtZTgwODg1OTY1MDI@._V1_UX140_C R0,0,140,209_AL_.jpg",
     "alt":"Solace (2015) Poster"
     },
     {
        "id":"id-4",
     "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTg0Nzc1NjA0MV5BMl5BanBnXkFtZTgwNTcyNDQ0MDI@._V1_UX140_C R0,0,140,209_AL_.jpg",
    "alt":"Fences (2016) Poster"
     },
     {
        "id":"id-5",
     "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
     "alt":"Manchester by the Sea (2016) Poster"
     },
     {    "id":"id-6",
     "src":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UY209_CR0,0,140,209_AL_.jpg",
     "alt":"Moana (2016) Poster"
    }]
