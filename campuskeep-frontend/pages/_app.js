import { ChakraProvider } from '@chakra-ui/react'
import '../src/app/globals.css';
import react from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp