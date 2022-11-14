import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../../widget/demo'

export default
function AnotherPage() {
  return <>
    <Link to = '/'>back to home</Link>
    <Input />
  </>
}
