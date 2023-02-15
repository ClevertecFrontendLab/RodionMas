import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';
import style from './about-book.module.css';

export const AboutBook = ({ pageBookId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth]);
    return size;
  };
  const [width] = useWindowSize();

  return (
    <div>
      {pageBookId !== null && (
        <section className={style.bookPage}>
          <div className={style.wrapper}>
            <div className={style.swiper}>
              {width > 1110 ? (
                <Swiper
                  data-test-id='slide-big'
                  loop={false}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={10}
                  navigation={true}
                  // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className='mySwiper2'
                >
                  {pageBookId.images.map((image, index) => (
                    <SwiperSlide key={Math.random()}>
                      <img src={`https://strapi.cleverland.by${image.url}`} alt='book' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Swiper
                  data-test-id='slide-big'
                  loop={false}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={10}
                  navigation={true}
                  // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className='mySwiper2'
                >
                  {pageBookId.images.map((image, index) => (
                    <SwiperSlide key={Math.random()}>
                      <img src={`https://strapi.cleverland.by${image.url}`} alt='book' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
              >
                {pageBookId.images.map((image, index) => (
                  <SwiperSlide data-test-id='slide-mini' key={Math.random()}>
                    {pageBookId.images.length <= 1 ? (
                      false
                    ) : (
                      <img
                        className={style.bookSwiperImg}
                        src={`https://strapi.cleverland.by${image.url}`}
                        alt='book'
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={style.aboutBookTop}>
              <h3 className={style.bookName}>{pageBookId.title}</h3>
              <h5 className={style.author}>
                {pageBookId.authors}, {pageBookId.issueYear}
              </h5>
              <button type='button' className={style.btn}>
                Забронировать
              </button>
              <div className={style.aboutBookBot}>
                <h5>О книге</h5>
                <p className={style.text}>{pageBookId.description}</p>
              </div>
            </div>
          </div>

          <div className={style.aboutBookBotMobile}>
            <h5>О книге</h5>
            <p className={style.text}>{pageBookId.description}</p>
          </div>
        </section>
      )}
    </div>
  );
};
