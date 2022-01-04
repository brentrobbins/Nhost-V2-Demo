import type { NextPage } from 'next'
import Link from 'next/link';
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { authProtected } from '@/components/auth-protected'

const App: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <h1>App</h1>
      </main>
    </Layout>
  )
}

export default authProtected(App)