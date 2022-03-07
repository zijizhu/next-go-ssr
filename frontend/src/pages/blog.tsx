import type { NextPage, GetServerSideProps } from 'next'

const Blog: NextPage<{ data: { blog: string } }> = ({ data }) => {
  return <div>{data.blog}</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blog/1`)
  const data = await res.json()
  return {
    props: { data }
  }
}

export default Blog
