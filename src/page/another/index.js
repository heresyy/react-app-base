import { Link } from 'react-router-dom'
import { El } from '../../common/Element'

export default
function AnotherPage() {
  return El(Link,
    { to: '/' },
    ['back to home']
  )
}
