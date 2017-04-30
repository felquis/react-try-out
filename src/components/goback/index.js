import React from 'react'
import Header from './../header'
import { Link } from 'react-router'
import st from './index.css'
import Icon from 'react-icons/lib/fa/chevron-left'

const GoBack = () => {
  return (
    <Header
      className={st.header}
      logo={() => <Link className={st.link} to="/"><Icon />Voltar</Link>}
    />
  )
}

export default GoBack 
