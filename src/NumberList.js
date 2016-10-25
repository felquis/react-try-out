import React from 'react'

function NumberList(props) {
  const list = props.numbers.map((item, index) => (<li key={index}>{item}</li>))

  return (
    <ul>{list}</ul>
  )
}

export default NumberList
