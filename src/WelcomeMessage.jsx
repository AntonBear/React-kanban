import React from 'react'

function WelcomeMessage({ name }) {
  console.log(typeof name)
  return <div>WelcomeMessage {name || 'никто'}</div>
}

export default WelcomeMessage
