import type { NextPage } from 'next'
import Link from 'next/link';
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <h1>Home</h1>
      </main>
    </Layout>
  )
}

export default Home
