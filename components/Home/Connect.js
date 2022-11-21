/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from '../../styles/partial/home.module.scss'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'
import { motion } from 'framer-motion'

const Connect = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section} `}
      id={`${LandingPageStyles.community}`}
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={`cOrange`}
        >
          Connect with me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          The ants enjoyed the barbecue more than the family. Everyone was busy,
          so I went to the movie alone.
        </motion.p>
        <div
          className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.buttons}`}
        >
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgOrange} wow animate__animated animate__slideInUp`}
            contents={`Hire me`}
            to={`workstation`}
          />
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.secondaryButton} wow animate__animated animate__slideInUp cOrange
`}
            contents={`Explore`}
            to={`workstation`}
          />
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: '100px' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`wow animate__animated animate__slideInUp`}
        src='myService.png'
        alt='LaptopWomanFk'
      />
    </section>
  )
}

export default Connect
