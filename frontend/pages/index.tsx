import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'

const StyledButton = styled.button`
  background-color: red;
  padding: 4rem;
  margin: 4em;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
