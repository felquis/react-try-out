import React from 'react'

class Quantity extends React.Component {
  constructor(props) {
    super(props)

    this.state = { number: 0, max: 10 }
    this.handleClickIncrease = this.handleClickIncrease.bind(this)
    this.handleClickDecrease = this.handleClickDecrease.bind(this)
  }

  render() {
    return (
      <div>
        {
          (this.state.number < 10)
          ? <button onClick={this.handleClickIncrease}>Increase</button>
          : null
        }

        {
          (this.state.number > 0)
          ? <button onClick={this.handleClickDecrease}>Decrease</button>
          : null
        }

        <div>
          Number: {this.state.number}
        </div>
      </div>
    )
  }

  handleClickDecrease() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1
      }
    })
  }

  handleClickIncrease() {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    })
  }
}

export default Quantity
