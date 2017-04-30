import React from 'react'
import st from './index.css'
import { Link } from 'react-router'

const Nav = (props) => (
  <div className={st.nav}>
    {props.links.map((nav, key) => {
      return (
        <Link
          key={key}
          className={st.navItem}
          to={nav.to}
        >{nav.label}</Link>
      )
    })}
  </div>
)

export default Nav

