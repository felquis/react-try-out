import React from 'react'

import st from './index.css'

const Content = (props) => {
  return (
    <div className={st.container}>
      <button
        className={st.property}
        onClick={props.hit}>
        Turn { props.state.property ? 'On' : 'Off' }
      </button>
    </div>
  )
}

export default Content
