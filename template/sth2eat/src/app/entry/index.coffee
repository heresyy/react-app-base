import { $ } from '@ppzp/utils.rc'
import { routes } from '@ppzp/utils.rc/router'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import '../page/home/index.coffee'
import '../page/lazy/index.coffee'

App = ->
  $(RouterProvider, {
    router: createBrowserRouter(routes)
  })

createRoot(document.getElementById('app')).render($ App)
