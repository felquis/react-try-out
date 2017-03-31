import React from 'react'
import { Link } from 'react-router'
import st from './index.css'

class PageTemplate extends React.Component {
  constructor() {
    super()
    this.state = { property: true }
    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    console.log('handleEvent')
    this.setState({ property: !this.state.property })
  }

  render() {
    const {
      property
    } = this.state

    return (
      <div className={st.property}>
        <Link to="/">Page Template</Link>

        <div>
          <button
            className={st.property}
            onClick={this.handleEvent}>
            Turn { property ? 'On' : 'Off' }
          </button>
        </div>
      </div>
    )
  }
}

export default PageTemplate 
