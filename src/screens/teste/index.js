import React from 'react'
import { Link } from 'react-router'

class Teste extends React.Component {
  constructor() {
    super()
    this.state = {
      items: Array.from({ length: 9 })
    }

    this.onActive = this.onActive.bind(this)
  }

  onActive() {
    console.log('onActive')
  }

  render() {
    const { items } = this.state

    return (
      <div className={rootStyle.subRoot}>
        <Link to="/">Home Page</Link>

        <div>
          <div className={st.list}>
            {items.map((item, key) => (
              <Item key={key} index={key} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

class Item extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false
    }

    this.onActive = this.onActive.bind(this)
  }

  onActive() {
    console.log('click!')
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state
    return (
      <div
        onClick={this.onActive}
        className={st.item + ' ' + (active? st.itemActive : '' )}>
        Hi {this.props.index}
      </div>
    )
  }
}

export default Teste
