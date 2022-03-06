import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PrimaryButton = styled.button`
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem;
  margin: 0.5rem;
  font-weight: 600;
  border-width: 0px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`

const Heading = styled.h1`
  font-weight: 800;
`

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>SSR Prototype</title>
        <meta
          name="description"
          content="Next.js SSR + blog factory prototype"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Heading>Next.js SSR Prototype</Heading>
        <PrimaryButton>Go to blog</PrimaryButton>
      </MainContainer>
    </PageContainer>
  )
}

export default Home
