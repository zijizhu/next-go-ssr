import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import PrimaryButton from '../../components/PrimaryButton'
import PageContainer from '../../components/PageContainer'
import MainContainer from '../../components/MainContainer'

const Heading = styled.h1`
  font-weight: 800;
`

const BackButton = styled(PrimaryButton)`
  background-color: #9ca3af;

  :hover {
    background-color: #4b5563;
  }
`

const BlogHome: NextPage = () => {
  const [numBlogs, setNumBlogs] = useState<number | undefined>()
  const router = useRouter()

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/count`
      )
      const data = await res.json()
      setNumBlogs(data.count)
    }
    fetchBlogs()
  }, [])

  return (
    <PageContainer>
      <Head>
        <title>Blog</title>
        <meta name="description" content="This is blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Heading>Blog Homepage</Heading>
        <p>there are {numBlogs} blogs</p>
        <Link href="/blog/1">blog 1</Link>
        <BackButton onClick={() => router.push('/')}>Back to home</BackButton>
      </MainContainer>
    </PageContainer>
  )
}

export default BlogHome
