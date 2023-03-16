import { $ } from 'utils.rc'
import { routes } from 'utils.rc/router'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default ->
  createRoot(document.getElementById('app'))
    .render($(RouterProvider, {
      router: createBrowserRouter(routes)
    }))
