import { El, Div } from '../../common/Element'

export default
function Layout({ children, ...props }) {
  return Div(
    {

    },
    [
      El('header', {}, ['this is header']),
      children,
      El('footer', {}, ['this is footer'])
    ]
  )
}
