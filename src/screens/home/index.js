import React from 'react'

import Header from '../../components/header'
import Content from '../../components/content'
import Nav from '../../components/nav'

import navigations from '../../schemas/navigations'

import st from './index.css'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      navigations
    }
  }

  render() {
    const { navigations } = this.state

    return (
      <div className={st.subRoot}>
        <header className={st.flexColumn}>
          <Header logo={() => <div>Alo!</div>} />

          <Content children={() =>
              <Nav links={navigations} />}
          />
        </header>
      </div>
    )
  }
}

export default Home
