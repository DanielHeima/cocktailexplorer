import React from 'react'

const Drink = ({params}:{params: {id: number}}) => {
  return (
    <div>{params.id}</div>
  )
}

export default Drink