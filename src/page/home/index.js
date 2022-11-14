import El from '../../common/Element'
import Layout from '../../cmp/layout'
import Demo from '../../cmp/demo'
import { Link } from 'react-router-dom'

export default
function HomePage() {
  return Layout({}, El('div', [
    Demo(),
    El(Link,
      { to: '/another' },
      'another page'
    )
  ]))
}
