import { El, Div } from '../../common/Element'
import Layout from '../../cmp/layout'
import Demo from '../../cmp/demo'
import { Link } from 'react-router-dom'

export default
function HomePage() {
  return El(Layout, {}, [
    El(Demo),
    El(Link,
      { to: '/another' },
      ['another page']
    )
  ])
}
