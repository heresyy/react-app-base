import { $ } from '@ppzp/utils.rc'
import { pushRoute } from '@ppzp/utils.rc/router'
import Layout from '../../cmp/layout/index.coffee'

HomePage = ->
  $(Layout,
    $.div('this is home')
  )

pushRoute({
  path: '/'
  Page: HomePage
})
