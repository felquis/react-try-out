import React from 'react'
import st from './index.css'

class Menu extends React.Component {
  render() {
    return (
      <div className={st.menu}>    
        <div tabIndex={1} className={st.menuItem}>
          Sobre        
        </div>
        
        <div tabIndex={2} className={st.menuItem}>
          Contato        
        </div>
      </div>
    )
  }
}

export default Menu
