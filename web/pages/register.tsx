import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from 'next'
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'

import { nhost } from "@/utils/nhost";


const Register: NextPage = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await nhost.auth.signUp({
        email,
        password,
        options: {
          displayName: displayName,
        },
      });
    } catch (error) {
      console.log(error);
      return alert("Registration failed");
    }

    console.log("Registration OK. Logging you in...");
    router.push("/login");
  }

  return (
    <Layout>
      <Header />

      <main>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="displayName" style={{ display: 'block', marginBottom: '.5rem' }}>Display Name</label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Name"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', marginTop: '1rem' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem', marginTop: '1rem' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </main>

    </Layout>
  )
}

export default Register
