import El from '../../common/Element'

export default
function Layout(props, child) {
  return El('div', [
    El('header', 'this is header'),
    child,
    El('footer', 'this is footer')
  ])
}
