/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from "../../styles/partial/home.module.scss";
import LinkButtons from "../button/linkButton";
import HeaderStyles from "../../styles/partial/header.module.scss";

const Community = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section} `}
      id={`${LandingPageStyles.community}`}
    >
      <h2>Our Community</h2>
      <div className={`${LandingPageStyles.ademola}`}>
        {/*   <img src='ademola.png' alt='ademola' /> */}
        <i>We Nuture and build the future Tech Giants in Africa</i>
      </div>
      <LinkButtons
        classes={`${HeaderStyles.linkButton} myMargin wow animate__animated animate__fadeInDown`}
        contents={`Join Community`}
        to={`https://chat.whatsapp.com/LyFmrnDLM5u4FbQg366Ro9`}
      />
    </section>
  );
};

export default Community;
