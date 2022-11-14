import React from 'react'
import Layout from '../../cmp/layout'
import Demo from '../../cmp/demo'
import { Link } from 'react-router-dom'

export default
function HomePage() {
  return <Layout>
    <Demo />
    <Link to = '/another'>another page</Link>
  </Layout>
}
