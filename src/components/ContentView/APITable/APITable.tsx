import React from 'react'
import { COMPONENT_API } from '../../../constant'
import { Cell, headers,Row, Table, TableHeader, Type } from './APITable.styles'

type APITableProps = {
    data:COMPONENT_API[]
}
const APITable = ({data}:APITableProps) => {
console.log("asdasdasdas", data)
  return (
    <Table>
      {headers.map(header=><TableHeader>{header}</TableHeader>)}
      {data.map(apiData=>
      <Row>
        <Cell>{apiData.property}</Cell>
        <Cell>{apiData.description}</Cell>
        <Cell><Type>{apiData.type}</Type></Cell>
        <Cell>{apiData.default || '-'}</Cell>
        </Row>)}
        
    </Table>
  )
}

export default APITable