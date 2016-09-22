import React from 'react'
import Headroom from 'react-headroom'
import SiteHeader from '../components/SiteHeader'

const Template = ({ children }) =>
  <div>
    <Headroom disableInlineStyles>
      <SiteHeader />
    </Headroom>
    {children}
  </div>

const propTypes = {
  children: React.PropTypes.any
}

export default Object.assign(Template, propTypes)
