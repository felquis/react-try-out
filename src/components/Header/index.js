import React from 'react'
import Menu from '../Menu'

import st from './index.css'

class Header extends React.Component {
  render() {
    return (
      <div className={st.outerHeader}>
        <div className={st.header}>
          <div className={[st.container, st.headerAlign].join(' ')}>
            <div className={st.headerPrimary}>
              {<this.props.logo />}
            </div>

            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
