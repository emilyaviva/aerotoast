import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()
const head = Helmet.rewind()
const css = process.env.NODE_ENV === 'production'
  ? <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  : null

const Html = ({ body }) =>
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {css}
    </head>
    <body>
      <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
    </body>
  </html>

const propTypes = {
  title: React.PropTypes.string
}

export default Object.assign(Html, propTypes)
