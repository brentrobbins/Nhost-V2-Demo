import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from 'next'
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'

import { nhost } from "@/utils/nhost";


const Login: NextPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Router = useRouter();

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    let response
    try {
      response = await nhost.auth.signIn({ email, password });
      if (response.error) {
        console.error(response.error)
        return;
      } else {
        console.log('Log in worked!')
        Router.push('/app')
      }

    } catch (error) {
      console.error({ error })
      return;
    }
  }

  return (
    <Layout>
      <Header />

      <main>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </main>

    </Layout>
  )
}

export default Login
