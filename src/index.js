import React from 'react'
import ReactDOM from 'react-dom'
import BoilingVerdict from './BoilingVerdict'
import ThinkReact from './ThinkReact'

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="thank you for visiting our spacecraft!">
      <h1>Alo Brasil!</h1>
    </Dialog>
  )
}

class SignUpdialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {login: ''}
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">

        <input value={this.state.login} onChange={this.handleChange} />
        <button onChange={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}

//
// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="splitPane-right">
//         {props.right}
//       </div>
//     </div>
//   )
// }
//
// function App() {
//   return (
//     <SplitPane
//       left={<Contact />}
//       right={<Chat />}
//     />
//   )
// }


ReactDOM.render(<ThinkReact />, document.getElementById('root'))
