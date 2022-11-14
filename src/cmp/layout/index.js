import React from 'react'

export default
function Layout({ children }) {
  return <div>
    <header>this is header</header>
    {children}
    <footer>this is footer</footer>
  </div>
}
