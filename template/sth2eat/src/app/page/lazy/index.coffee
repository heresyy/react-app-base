import { pushLazyRoute } from '@ppzp/utils.rc/router'

pushLazyRoute({
  path: '/lazy'
  Page: () => import('./_index.coffee')
})
