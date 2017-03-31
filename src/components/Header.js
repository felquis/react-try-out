import React from 'react'
import Menu from './Menu.js'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container header-align">
            {<this.props.logo />}

            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
