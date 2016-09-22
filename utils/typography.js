import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    { name: 'Oswald', styles: ['400', '400i'] }
  ]
})

// Hot reload typography in development
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
