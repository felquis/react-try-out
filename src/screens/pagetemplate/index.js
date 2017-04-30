import React from 'react'

import GoBack from './../../components/goback'
import Page from './../../components/page'

import Content from './content'

class PageTemplate extends React.Component {
  constructor() {
    super()
    this.state = { property: true }
    this.hit = this.hit.bind(this)
  }

  hit() {
    this.setState({ property: !this.state.property })
  }

  render() {
    return (
      <Page
        header={() => <GoBack />}
        content={() => <Content hit={this.hit} state={this.state} />}
      />
    )
  }
}

export default PageTemplate
