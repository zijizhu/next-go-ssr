import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import PrimaryButton from '../components/PrimaryButton'
import PageContainer from '../components/PageContainer'
import MainContainer from '../components/MainContainer'

import Blog from '../components/Blog'

const Heading = styled.h1`
  font-weight: 800;
`

const Home: NextPage = () => {
  const router = useRouter()

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
        <PrimaryButton onClick={() => router.push('/blog')}>
          Go to blog
        </PrimaryButton>
        <Blog />
      </MainContainer>
    </PageContainer>
  )
}

export default Home
