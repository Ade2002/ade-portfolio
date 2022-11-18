import React, { useState } from 'react'
import Main from './main'
import HeaderComponents from '../header/headerComponent'
import FooterComponents from '../footer/footerComponents'
import HeaderStyles from '../../styles/partial/header.module.scss'
const General = ({ children, footerid }) => {
  const displayNotification = 'none'
  const removeMainMargin = 'noMargin'
  const [notify, setNotify] = useState(displayNotification)
  const [mainMargin, setMainMargin] = useState(removeMainMargin)
  const RemoveNotifications = e => {
    e.stopPropagation()
    setNotify(!notify)
    setMainMargin(!mainMargin)
  }
  return (
    <>
      <HeaderComponents
        LinkButtonTo={`/contact`}
        LinkButtonContents={`Contact Us`}
        LinkButtonClasses={`${HeaderStyles.linkButton} ${HeaderStyles.black}`}
        notify={notify}
        RemoveNotifications={RemoveNotifications}
      />
      <Main mainMargin={mainMargin}>{children}</Main>
      <FooterComponents footerid={footerid} />
    </>
  )
}
export default General
