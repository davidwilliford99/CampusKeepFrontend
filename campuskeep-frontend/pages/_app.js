import { ChakraProvider } from '@chakra-ui/react'
import '../src/app/globals.css';
import react from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp