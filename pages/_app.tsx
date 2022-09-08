import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Theme } from '../src/chakra/theme'
function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
