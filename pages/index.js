import Head from 'next/head'
import Image from 'next/image'

export default function Home () {
 
  return (
    <div className=''>
   

      <main className=''>
       Ade is cool my boy dd as bggg kjhg
      </main>

      <footer className=''>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className=''>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
