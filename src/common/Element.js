import React from 'react'

export default
function El(Component, props, children = []) {
  if(props instanceof Array) {
    children = props
    props = null
  } else if(typeof props == 'string') {
    children = [props]
    props = null
  }
  return React.createElement(Component, props, ...children)
}
