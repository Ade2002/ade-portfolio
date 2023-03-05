/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Qhsestyles from "../../styles/qhse/styles.module.scss";
import { sliderData } from "./Layouts/data/dataSwiper";

const Testimonials = () => {
  const swiperLeftPrevRef = useRef(null);
  const swiperLeftNextRef = useRef(null);

  return (
    <section className={`${Qhsestyles.contain}`}>
      <div>
        <span>
          <h3>Testimonials</h3>
          <h2>What my clients say</h2>
          <p>
            The ants enjoyed the barbecue more than the family. Everyone was
            busy, so I went to the movie alone. come from a tribe of
            head-hunters, so I will never{" "}
          </p>
        </span>
        <span>
           <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="24" stroke="#FB4B04" stroke-width="2" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.5 24.9998C31.5 25.2153 31.4144 25.422 31.2621 25.5743C31.1097 25.7267 30.903 25.8123 30.6875 25.8123H21.2739L24.7628 29.2996C24.8383 29.3751 24.8983 29.4648 24.9391 29.5635C24.98 29.6622 25.0011 29.768 25.0011 29.8748C25.0011 29.9816 24.98 30.0874 24.9391 30.1861C24.8983 30.2848 24.8383 30.3745 24.7628 30.4501C24.6873 30.5256 24.5976 30.5855 24.4989 30.6264C24.4002 30.6673 24.2944 30.6883 24.1875 30.6883C24.0807 30.6883 23.9749 30.6673 23.8762 30.6264C23.7775 30.5855 23.6878 30.5256 23.6123 30.4501L18.7373 25.5751C18.6616 25.4996 18.6016 25.4099 18.5606 25.3112C18.5197 25.2125 18.4986 25.1067 18.4986 24.9998C18.4986 24.8929 18.5197 24.7871 18.5606 24.6884C18.6016 24.5897 18.6616 24.5 18.7373 24.4246L23.6123 19.5496C23.7649 19.397 23.9718 19.3113 24.1875 19.3113C24.4033 19.3113 24.6102 19.397 24.7628 19.5496C24.9154 19.7021 25.0011 19.909 25.0011 20.1248C25.0011 20.3406 24.9154 20.5475 24.7628 20.7001L21.2739 24.1873H30.6875C30.903 24.1873 31.1097 24.2729 31.2621 24.4253C31.4144 24.5777 31.5 24.7843 31.5 24.9998Z"
              fill="#FB4B04"
            />
          </svg>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="25"
              transform="matrix(-1 0 0 1 50 0)"
              fill="#FB4B04"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5 24.9998C18.5 25.2153 18.5856 25.422 18.7379 25.5743C18.8903 25.7267 19.097 25.8123 19.3125 25.8123H28.7261L25.2372 29.2996C25.1617 29.3751 25.1017 29.4648 25.0609 29.5635C25.02 29.6622 24.9989 29.768 24.9989 29.8748C24.9989 29.9816 25.02 30.0874 25.0609 30.1861C25.1017 30.2848 25.1617 30.3745 25.2372 30.4501C25.3127 30.5256 25.4024 30.5855 25.5011 30.6264C25.5998 30.6673 25.7056 30.6883 25.8125 30.6883C25.9193 30.6883 26.0251 30.6673 26.1238 30.6264C26.2225 30.5855 26.3122 30.5256 26.3877 30.4501L31.2627 25.5751C31.3384 25.4996 31.3984 25.4099 31.4394 25.3112C31.4803 25.2125 31.5014 25.1067 31.5014 24.9998C31.5014 24.8929 31.4803 24.7871 31.4394 24.6884C31.3984 24.5897 31.3384 24.5 31.2627 24.4246L26.3877 19.5496C26.2351 19.397 26.0282 19.3113 25.8125 19.3113C25.5967 19.3113 25.3898 19.397 25.2372 19.5496C25.0846 19.7021 24.9989 19.909 24.9989 20.1248C24.9989 20.3406 25.0846 20.5475 25.2372 20.7001L28.7261 24.1873H19.3125C19.097 24.1873 18.8903 24.2729 18.7379 24.4253C18.5856 24.5777 18.5 24.7843 18.5 24.9998Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div className={`${Qhsestyles.m0} ${Qhsestyles.slidersCon}`}>
        {sliderData.map(({ img, name }, index) => (
          <SwiperSlide key={index} className={`${Qhsestyles.my0}`}>
            <div className={`${Qhsestyles.slideDatas}`}>
              <div
                className={`${Qhsestyles.m0} ${Qhsestyles.cardContainerContent}`}
              >
                <div className={`${Qhsestyles.m0} ${Qhsestyles.imageCon}`}>
                  <img src={img} alt="img" />
                </div>
                <div className={`${Qhsestyles.m0} ${Qhsestyles.card}`}>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      You are very close to becoming the person of your
                    </span>
                    {` `}
                    <span>
                      dream by taking any of our online/offline tech track
                    </span>{" "}
                    <span>courses Read More</span>
                  </p>
                  <h3 className={`${Qhsestyles.m0}`}>{name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
