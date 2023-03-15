import { $ } from 'utils.rc'
import { useState, useEffect } from 'react'

import Layout from '../../cmp/layout/index.coffee'

export default ->
  [phone, setPhone] = useState()
  useEffect ->
    setPhone '110'
  , []

  person =
    name: 'ppz'
    address: '上海'
  
  return $(Layout,
    $.h1('another')
    $.p('这是一个 p')
    $.p("name: #{person.name}, phone: #{phone}")
  )
