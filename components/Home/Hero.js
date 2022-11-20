/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from '../../styles/partial/home.module.scss'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'

const Hero = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}  gap-2`}
      id={`${LandingPageStyles.hero}`}
    >
      <div>
        <span>
          Hello, <span className={`cOrange`}>I am</span>
        </span>
        <h1 className={`cOrange`}>Sikiru Ademola</h1>
        <h3>Frontend Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat nibh
          nunc, id ac quisque. Vivamus vitae, id lacus et, enim mi amet. Leo
          quis a ut est at sit ut aenean. Tincidunt nulla nisi, velit viverra
          maecenas eu condimentum odio.
        </p>
        <LinkButtons
          classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgBlack} wow animate__animated animate__fadeInDown`}
          contents={`Get Started`}
          to={`/signIn`}
        />
      </div>
      <img
        className={`${LandingPageStyles.none_m}  wow animate__animated animate__fadeIn`}
        src='/adeHero.png'
        alt='adeHero'
      />
      <img
        className={`wow animate__animated animate__fadeIn`}
        src='/adeHero.png'
        alt='adeHero'
      />
    </section>
  )
}

export default Hero
