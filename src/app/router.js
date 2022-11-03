import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../page/home'
import AnotherPage from '../page/another'

export default
createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/another',
    element: <AnotherPage />
  }
])
