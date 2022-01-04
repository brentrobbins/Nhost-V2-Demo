import Link from 'next/link';
import { useNhostAuth } from '@nhost/react-auth'
import { nhost } from '@/utils/nhost'
export function Header() {
  const { isAuthenticated } = useNhostAuth();
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <header>
        <h1>Nhost V2 Demo</h1>
      </header>
      <nav>
        <ul style={{ display: 'grid', gridGap: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <li style={{ display: 'block' }}><Link href='/'><a>Home</a></Link></li>

          {isAuthenticated ? (<>
            <li style={{ display: 'block' }}><Link href='/app'><a>App</a></Link></li>
            <li style={{ display: 'block' }}><button onClick={() => nhost.auth.signOut()}>Log Out</button></li>
          </>) : (<>
            <li style={{ display: 'block' }}><Link href='/login'><a>Login</a></Link></li>
            <li style={{ display: 'block' }}><Link href='/register'><a>Register</a></Link></li>
          </>)}
        </ul>
      </nav>
    </div>
  )
}
