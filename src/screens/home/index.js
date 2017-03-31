import React from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import Content from '../../components/Content'

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Header logo={() => (
            <div>Alo!</div>
          )} />
          <Content children={() => (
            <Link to="page-template">Page Template</Link>
          )} />
        </nav>
      </div>
    )
  }
}

export default Home
