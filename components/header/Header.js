/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import HeaderStyles from '../../styles/partial/header.module.scss'
import Link from 'next/link'
import LinkButtons from '../button/linkButton'

const Header = ({ LinkButtonClasses, LinkButtonContents, LinkButtonTo }) => {
  let bgHeaderWhite = '#ffffff'
  let bgHeaderTransparent = '#00000000'
  let minHeight = '50'

  const close = true
  const [nav, setNav] = useState(close)
  const NavOptions = e => {
    e.stopPropagation()
    setNav(!nav)
  }
  useEffect(() => {
    window.onscroll = () => {
      let scrolling =
        document.body.scrollTop > minHeight ||
        document.documentElement.scrollTop > minHeight
      let headerBg = document.getElementsByTagName('header')[0]
      if (!scrolling) {
        //@top
        headerBg.style.backgroundColor = bgHeaderTransparent
      } else {
        headerBg.style.backgroundColor = bgHeaderWhite
      }
    }
    const resetHeader = () => setNav(close)
    window.addEventListener('click', resetHeader)
    return () => window.removeEventListener('click', resetHeader)
  })

  return (
    <header className={HeaderStyles.header}>
      <section>
        <Link href='/'>
          <div className={HeaderStyles.logo} style={{ cursor: 'pointer' }}>
            <img src='/acadonLogo.svg' alt='acadon_logo' />
          </div>
        </Link>
        <span
          className={`${nav ? HeaderStyles.none_t : ''} ${
            HeaderStyles.flex_c
          } ${HeaderStyles.navLinks}
        `}
        >
          <Link href='/courses'>
            <a>All Courses</a>
          </Link>
          <Link href='https://www.atc.com.ng/contact/'>
            <a>Contact us</a>
          </Link>
          <Link href='https://www.atc.com.ng/faq/'>
            <a>FAQ</a>
          </Link>
          <Link href='/signIn'>
            <a>Sign in</a>
          </Link>
          <LinkButtons
            classes={LinkButtonClasses}
            contents={LinkButtonContents}
            to={LinkButtonTo}
          />
        </span>
        <span className={`${HeaderStyles.icon}`} onClick={NavOptions}>
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path
              d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z'
              fill='#1040e2'
              stroke='black'
              strokeWidth='1.5'
            />
            <path d='M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z' />
          </svg>
          <svg
            className='none'
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path
              d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'
              stroke='black'
              strokeWidth='1.5'
            />
          </svg>
        </span>
      </section>
    </header>
  )
}
export default Header
