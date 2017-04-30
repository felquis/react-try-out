import React from 'react'
import st from './index.css'

const Page = (props) => {
  return (
    <div className={st.subRoot}>
      <props.header />
      <props.content />
    </div>
  )
}

export default Page
