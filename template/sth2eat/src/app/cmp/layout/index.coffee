import { $ } from '@ppzp/utils.rc'
import { Link } from 'react-router-dom'
import './index.styl'

export default ({ children }) ->
  $.div(
    $.header(
      $.h1 "PPZ's React App"
      $ Link, { to: '/' }, 'home'
      ' | '
      $ Link, { to: '/lazy' }, 'lazy'
    )
    children
    $.footer 'this is page footer'
  )
