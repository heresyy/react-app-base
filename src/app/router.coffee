import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../page/home/index.coffee'
AnotherPage = React.lazy(() => import('../page/another/index.coffee'))

export default createBrowserRouter [
  {
    path: '/'
    element: <HomePage />
  }
  {
    path: '/another'
    element: <Suspense fallback = {<div>loading</div>}><AnotherPage /></Suspense>
  }
]
