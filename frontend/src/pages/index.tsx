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
      { text: 'Lorem Ipsum', bold: true, link: 'https://www.lipsum.com/' },
      {
        text: ' is simply dummy text of the printing and typesetting industry.',
        bold: true
      },
      { text: 'Lorem Ipsum has been ', bold: true },
      { text: 'the industry standard', underline: true, bold: true },
      {
        text: ' dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [
      {
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      },
      {
        text: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        bold: true
      },
      {
        text: 'Lorem Ipsum',
        bold: true,
        italic: true,
        underline: true
      },
      {
        text: ' passages',
        bold: true,
        italic: true
      },
      {
        text: ', and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        bold: true
      }
    ]
  }
]

export default Home
