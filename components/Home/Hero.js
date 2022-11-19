/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from "../../styles/partial/home.module.scss";
import LinkButtons from "../button/linkButton";
import HeaderStyles from "../../styles/partial/header.module.scss";

const Hero = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}  gap-2`}
      id={`${LandingPageStyles.academy}`}
    >
      <div>
        <h1>
          Acquire the skills you need for a $100k+ tech career in just 3 months.
        </h1>
        <p>
          Acquire the 21st century skills so as to improve your relevance and
          employability in this ever changing world.
        </p>
        <LinkButtons
          classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgBlack} wow animate__animated animate__fadeInDown`}
          contents={`Get Started`}
          to={`/signIn`}
        />
      </div>
      <img
        className={`${LandingPageStyles.none_m}  wow animate__animated animate__fadeIn`}
        src="/adeHero.png"
        alt="adeHero"
      />
      <img
        className={`wow animate__animated animate__fadeIn`}
        src="/adeHero.png"
        alt="adeHero"
      />
    </section>
  );
};

export default Hero;
