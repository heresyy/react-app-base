import { $ } from 'utils.rc'
import { Link } from 'react-router-dom'

import './index.styl'

export default ({ children }) ->
  $.div({ className: 'page' },
    $.header(
      $(Link, { to: '/' }, 'Home'),
      ' | ',
      $(Link, { to: '/another' }, 'another')
    )
    children
    $.footer('@ppzp/react-demo')
  )
