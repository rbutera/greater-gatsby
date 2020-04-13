import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import SEOData from '../components/seo'

const NotFoundPage: React.ReactFragment = () => (
  <Layout>
    <SEOData title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
