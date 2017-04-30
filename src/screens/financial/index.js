import React from 'react'

import GoBack from './../../components/goback'
import Page from './../../components/page'
import Content from './content'

import state from './config.js'

class PageTemplate extends React.Component {
  constructor() {
    super()

    this.state = Object.assign({}, state)
  }

  render() {
    return (
      <Page
        header={() => <GoBack />}
        content={() => <Content state={this.state} />}
      />
    )
  }
}

export default PageTemplate
