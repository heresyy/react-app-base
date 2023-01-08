import React from 'react'
import Layout from '../../cmp/layout'
import Demo from '../../cmp/demo'
import { Link } from 'react-router-dom'

export default
function HomePage() {
  return <Layout>
    <h1>Home</h1>
    <Demo />
  </Layout>
}
