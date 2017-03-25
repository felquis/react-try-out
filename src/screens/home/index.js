import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Testes</h1>

        <nav>
          <Link to="teste">Teste</Link>
        </nav>
      </div>
    )
  }
}

export default Home
