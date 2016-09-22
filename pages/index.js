import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import '../stylesheets/manifest.sass'

const Index = () =>
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        {name: 'description', content: "Toast. Anywhere. Anytime. Anyhow. It's time to disrupt breakfast."},
        {name: 'keywords', content: 'toast, drone, breakfast'}
      ]}
    />
    <main>
      <section className='icon'>
        <img src='img/toast.svg' alt='Toast' title='Icon made by Roundicons @ Flaticon, licensed CC-BY 3.0' />
        <h1 className='slogan'>Toast. However you like. Delivered straight to you by drone. Anywhere. Anytime.</h1>
      </section>
    </main>
  </div>

export default Index
