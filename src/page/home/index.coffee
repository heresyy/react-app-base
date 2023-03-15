import { $ } from 'utils.rc'
import Layout from '../../cmp/layout/index.coffee'
import Demo from '../../cmp/demo/index.coffee'

export default ->
  return $(Layout,
    $.h1('Home')
    $(Demo)
  )
