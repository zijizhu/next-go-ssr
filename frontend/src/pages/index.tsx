import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import PrimaryButton from '../components/PrimaryButton'
import PageContainer from '../components/PageContainer'
import MainContainer from '../components/MainContainer'
import { Element } from '../types'

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
        <Blog elements={data} />
      </MainContainer>
    </PageContainer>
  )
}

const data: Element[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true, underline: true, bold: true },
      { text: ' better', italic: true, bold: true },
      { text: ' than plain text!', bold: true }
    ]
  },
  {
    type: 'paragraph',
    align: 'right',
    children: [
      {
        text: 'It is also '
      },
      { text: 'server-side rendered', bold: true },
      {
        text: ', which means the server fetches the data and generates HTML for the client!'
      }
    ]
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }]
  }
]

export default Home
