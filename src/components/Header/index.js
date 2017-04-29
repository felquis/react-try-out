import React from 'react'
import Menu from '../Menu'

class Header extends React.Component {
  render() {
    return (
      <div className="outer-header">
        <div className="header">
          <div className="container header-align">
            <div className="header-primary">
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
