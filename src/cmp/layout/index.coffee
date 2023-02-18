import React from 'react'
import { Link } from 'react-router-dom'

import './index.styl'

export default ({ children }) -> pug"""
  div(className = 'page')
    header
      Link(to = '/') Home
      .
        &nbsp;|&nbsp;
      Link(to = '/another') another
    .
      #{children}
    footer @ppzp/react-demo
"""