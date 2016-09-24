import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import '../stylesheets/manifest.sass'
import 'bulma/bulma.sass'

const Index = () =>
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        {name: 'description', content: "Toast. Anywhere. Anytime. Anyhow. It's time to disrupt breakfast."},
        {name: 'keywords', content: 'toast, drone, breakfast, aerotoast'}
      ]}
    />
    <main>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <img src='img/toast.svg' alt='Toast' title='Icon made by Roundicons @ Flaticon, licensed CC-BY 3.0' />
            <h1>Toast. However you like. Delivered straight to you by drone. Anywhere. Anytime.</h1>
          </div>
        </div>
      </section>
    </main>
  </div>

export default Index
