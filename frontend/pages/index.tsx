import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: red;
  padding: 4rem;
  margin: 4em;
  border-width: 0px;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SSR Prototype</title>
        <meta
          name="description"
          content="Next.js SSR + blog factory prototype"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledButton>something</StyledButton>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
