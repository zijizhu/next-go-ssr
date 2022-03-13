import type { NextPage, GetServerSideProps } from 'next'
import Blog from '../../components/Blog'
import PageContainer from '../../components/PageContainer'
import MainContainer from '../../components/MainContainer'
import Link from 'next/link'
import { Element } from '../../types'

const BlogPage: NextPage<{ data: Element[] }> = ({ data }) => {
  return (
    <PageContainer>
      <MainContainer>
        <h1>blog1</h1>
        <Blog elements={data} />
        <Link href="/">home</Link>
      </MainContainer>
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/blog/${context.params?.bid}`
  )
  const data = await res.json()
  return {
    props: { data }
  }
}

export default BlogPage
