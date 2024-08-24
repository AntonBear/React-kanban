import React from 'react'
import { Wrapper_content } from './Wrapper.styled.js'

function Wrapper({ children }) {
  return <Wrapper_content>{children}</Wrapper_content>
}

export default Wrapper
