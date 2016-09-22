import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

const MarkdownWrapper = ({ router, route }) =>
  <div>
    <Helmet title={`${config.siteTitle} | ${route.page.data.title}`} />
    <h1>{route.page.data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: route.page.data.body }} />
  </div>

const propTypes = {
  router: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Object.assign(MarkdownWrapper, propTypes)
