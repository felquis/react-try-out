import React from 'react'

export default class CaptureCreditCard extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>holder name: <input name="holder_name" /></label>
        </div>

        <div>
          <label>card number: <input name="card_number" /></label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log('submited')
  }
}
