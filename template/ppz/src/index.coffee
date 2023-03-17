import { $ } from '@ppzp/utils.rc'
import { createRoot } from 'react-dom/client'

App = ->
  $.h1("PPZ's bear React APP")

createRoot(document.getElementById('app')).render($ App)
