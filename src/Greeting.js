import React from 'react'

function Greeting(props) {
  if (props.logged) {
    return <h1>Logged</h1>
  } else {
    return <h1>Not Logged</h1>
  }
}

export default Greeting
