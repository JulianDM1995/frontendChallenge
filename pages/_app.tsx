import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const client = new ApolloClient({
    uri: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <>
      <Head>
        <title>{'Around'}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <ApolloProvider client={client}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            primaryColor: 'dark',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ApolloProvider>
    </>
  )
}