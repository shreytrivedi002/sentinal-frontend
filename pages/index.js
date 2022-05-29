import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Login from '../components/login-signup'
import ToastApp from '../components/toast'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.container} >
      <video src='https://tdb-website-demo-con.b-cdn.net/new_video/compressed_tested_video~1.webm' autoPlay loop muted style={{ zIndex: '-2', position: 'fixed', width: '100vw', left: '0', top: '0' }} />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ToastApp /> */}
      {show && <Login close={() => setShow(!show)} />}
      <main className={`${styles.main}`}>
        <h1 className={`${styles.title} ${styles.bgWhit}`}>
          Welcome to <a href="/addAlert" style={{ color: 'orange' }}>Sentinal Safety</a>
        </h1>

        {
          typeof window !== 'undefined' && localStorage?.getItem('AUTH') === 'SUCCESS' ? <p className={styles.description} >
            Hi{' '}
            <code className={styles.code}>{localStorage.getItem('CURRENT_NUMBER')}</code><span onClick={() => { localStorage?.clear() }} style={{ cursor: 'pointer' }}><h6>Logout</h6></span>
          </p> : <p className={styles.description} onClick={() => setShow(!show)}>
            Get started by
            <code className={styles.code}>Login/Signup</code>
          </p>
        }
        {
          typeof window !== 'undefined' && localStorage.getItem('AUTH') === 'SUCCESS' && <div className={styles.grid}>
            <a href="/alerts" className={`${styles.card} ${styles.bgWhite}`} >
              <h2>Alert History &rarr;</h2>
              <p>Find in-depth information about previous alerts.</p>
            </a>

            <a href="/userDetails" className={`${styles.card} ${styles.bgWhite}`}>
              <h2>Manage Account  &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="/dashboard"
              className={`${styles.card} ${styles.bgWhite}`}
            >
              <h2>Dashboard &rarr;</h2>
              <p>Discover the insights aand events caused..</p>
            </a>

            <a
              href="#"
              className={`${styles.card} ${styles.bgWhite}`}
            >
              <h2>something more &rarr;</h2>
              <p>

              </p>
            </a>
          </div>
        }
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Sentinal
        </a>
      </footer>
    </div>
  )
}
