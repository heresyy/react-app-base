import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../page/home'
const AnotherPage = React.lazy(() => import('../page/another'))

export default
createBrowserRouter([
  {
    path: '/',
    element: HomePage()
  },
  {
    path: '/another',
    element: <Suspense fallback = {<div>loading</div>}><AnotherPage /></Suspense>
    // element: El(Suspense,
    //   {
    //     fallback: El('div', 'loading')
    //   }, [
    //     AnotherPage() // Error: AnotherPage is not a function
    //   ]
    // )
  }
])
