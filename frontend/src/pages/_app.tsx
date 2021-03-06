import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { myTheme } from '../styles/theme'
import { GlobalStyle } from '../styles/normalize'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
