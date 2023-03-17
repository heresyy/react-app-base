import { $ } from '@ppzp/utils.rc'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')).render($(App))

function App() {
  return <h1>Bear react app</h1>
}
