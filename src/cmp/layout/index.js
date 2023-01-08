import React from 'react'
import { Link } from 'react-router-dom'

import './index.styl'

export default
function Layout({ children }) {
  return <div className = 'page'>
    <header>
      <Link to = '/'>Home</Link> | <Link
        to = '/another'>another</Link>
    </header>
    {children}
    <footer>@ppzp/react-demo</footer>
  </div>
}
