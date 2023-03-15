import { $ } from 'utils.rc'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router.coffee'
import '../style/global.styl'

createRoot(document.getElementById('app'))
.render($(RouterProvider, { router }))
