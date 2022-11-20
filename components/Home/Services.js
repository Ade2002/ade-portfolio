/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from '../../styles/partial/home.module.scss'

const Services = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section} `}
      id={`${LandingPageStyles.services}`}
    >
      <div
        className={`${LandingPageStyles.none} ${LandingPageStyles.tablet} ${LandingPageStyles.academy}  wow animate__animated animate__slideInUp`}
      >
        <img src='../../guyWithPC.png' alt='student' />
        <img src='../../greyPic.png' alt='student' />
        <img src='../../uiuxguy.png' alt='student' />
        <img src='../../ladyInPink.png' alt='student' />
      </div>
      <div
        className={`${LandingPageStyles.note} ${LandingPageStyles.flex}  wow animate__animated animate__slideInUp`}
      >
        At ATC academy, we are here to support your dreams, and help you become
        Masters in your chosen career path. Our instructors will train, coach
        and mentor you.
      </div>
      <div
        className={`${LandingPageStyles.flex_r} ${LandingPageStyles.affiliates}  wow animate__animated animate__slideInUp`}
      >
        <img src='/matplotlib.png' alt='matplotlib' />
        <img src='../../Adobe.png' alt='Adobe' />
        <img src='/anaconda.png' alt='anaconda' />
        <img src='/facebook.png' alt='facebook' />
        <img src='../../AMBIOSH.png' alt='AMBIOSH' />
        <img
          src='../../CreativeCloud.png'
          style={{ transform: 'scaleY' + '(1.35)' }}
          alt='student'
        />
      </div>
      <div
        className={`${LandingPageStyles.flex_r} ${LandingPageStyles.affiliates}  wow animate__animated animate__slideInUp`}
      >
        <img src='../../ibm.svg' alt='' />
        <img src='../../microsoft.svg' alt='' />
        <img src='../../java.svg' alt='' />
        <img src='../../python.svg' alt='' />
        <img src='../../google.svg' alt='' />
        <img src='../../cisco.svg' alt='' />
      </div>
      <div
        className={`${LandingPageStyles.flex_r} ${LandingPageStyles.affiliates}  wow animate__animated animate__slideInUp`}
      >
        <img src='../../Tableu.png' alt='' />
        <img src='../../VScode.png' alt='' />
        <img src='../../Rstudio.png' alt='' />
        <img src='../../Laravel.png' alt='' />
        <img src='../../Django.png' alt='' />
        <img src='../../Figma.png' alt='' />
      </div>
    </section>
  )
}

export default Services
