import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import '../style/global.styl'

createRoot(document.getElementById('app')).render(
  <RouterProvider
    router = {router}
  />
)
