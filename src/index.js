import React from 'react'
import ReactDOM from 'react-dom'
// import Quantity from './Quantity'
// import LoginControl from './LoginControl'
// import Mailbox from './Mailbox'
// import Page from './Page'
// import NumberList from './NumberList'
// import Blog from './Blog'

// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Felquis" />
//       <Quantity />
//       <hr />
//       <LoginControl />
//       <Mailbox unreadMessages={['Message 1', 'Message 2', 'Message 3']} />
//       <Mailbox unreadMessages={['Message 1']} />
//     </div>
//   )
// }

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'))
