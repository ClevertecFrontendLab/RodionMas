import React, { useState } from 'react';
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
import emptyImg from '../../../assets/img/books/hideBookBig.jpg';
import style from './about-book.module.css';

export const AboutBook = ({ pageBookId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [size, setSize] = useState([window.innerWidth]);
  const useWindowSize = () => size;
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
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className='mySwiper2'
                >
                  {pageBookId.images === null ? (
                    <div>
                      <img src={emptyImg} alt='book' />
                    </div>
                  ) : (
                    pageBookId.images.map((image) => (
                      <SwiperSlide key={Math.random()}>
                        <img src={`https://strapi.cleverland.by${image.url}`} alt='book' />
                      </SwiperSlide>
                    ))
                  )}
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
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className='mySwiper2'
                >
                  {pageBookId.images === null ? (
                    <div>
                      <img src={emptyImg} alt='book' />
                    </div>
                  ) : (
                    pageBookId.images.map((image, index) => (
                      <SwiperSlide key={Math.random()}>
                        <img src={`https://strapi.cleverland.by${image.url}`} alt='book' />
                      </SwiperSlide>
                    ))
                  )}
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
                {pageBookId.images === null ? (
                  <div>
                    <img src={emptyImg} alt='book' />
                  </div>
                ) : (
                  pageBookId.images.map((image) => (
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
                  ))
                )}
              </Swiper>
            </div>
            <div className={style.aboutBookTop}>
              <h3 data-test-id='book-title' className={style.bookName}>{pageBookId.title}</h3>
              <h5 className={style.author}>
                {pageBookId.authors}, {pageBookId.issueYear}
              </h5>
              <button
                type='button'
                className={
                  !pageBookId.booking && !pageBookId.delivery
                    ? style.btn
                    : pageBookId.booking !== null
                    ? style.btnBooking
                    : style.btnReservation
                }
              >
                {!pageBookId.booking && !pageBookId.delivery
                  ? 'Забронировать'
                  : pageBookId.booking !== null
                  ? `Занята до ${pageBookId.booking.dateOrder.slice(5, -17)}.${pageBookId.booking.dateOrder.slice(
                      8,
                      -14
                    )}`
                  : 'Забронирована'}
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
