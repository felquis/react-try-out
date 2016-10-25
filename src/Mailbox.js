import React from 'react'

function Mailbox(props) {
  const unreadMessages = props.unreadMessages

  return (
    <div>
      <h1>Mailbox</h1>
      {unreadMessages.length > 1 &&
        <p>You have {unreadMessages.length} unread messages!</p>
      }

      {unreadMessages.length === 1 &&
        <p>You have {unreadMessages.length} unread message!</p>
      }
      </div>
  )
}

export default Mailbox
