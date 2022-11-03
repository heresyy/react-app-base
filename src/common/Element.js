import React from 'react'

export
function El(Component, props, children = []) {
  return React.createElement(Component, props, ...children)
}

export
function Div(props, children) {
  if(props instanceof Array) {
    children = props
    props = {}
  }
  return El('div', props, children)
}
