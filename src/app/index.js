import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import El from '../common/Element'
import router from './router'
import '../style/global.styl'

createRoot(document.getElementById('app')).render(
  El(RouterProvider, {
    router
  })
)
