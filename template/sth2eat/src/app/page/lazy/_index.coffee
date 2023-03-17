import { $ } from '@ppzp/utils.rc'
import Layout from '../../cmp/layout/index.coffee'

export default ->
  $(Layout,
    $.div('this is the lazy page')
  )
