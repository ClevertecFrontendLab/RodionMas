import React from 'react';
import bookImg from '../../../assets/img/books/big.jpg';
import style from './about-book.module.css';

export const AboutBook = () => {
  console.log();
  return (
    <section className={style.bookPage}>
      <div className={style.wrapper}>
        <img src={bookImg} alt='book' />
        <div className={style.aboutBookTop}>
          <h3 className={style.bookName}>
            Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
          </h3>
          <h5 className={style.author}>Адитья Бхаргава, 2019</h5>
          <button type='button' className={style.btn}>
            Забронировать
          </button>
          <div className={style.aboutBookBot}>
            <h5>О книге</h5>
            <p className={style.text}>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
            </p>
            <p className={style.subtext}>
              Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
              алгоритмы — это веселое и увлекательное занятие.
            </p>
          </div>
        </div>
      </div>
      <div className={style.aboutBookBotMobile}>
            <h5>О книге</h5>
            <p className={style.text}>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
            </p>
            <p className={style.subtext}>
              Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
              алгоритмы — это веселое и увлекательное занятие.
            </p>
          </div>
    </section>
  );
};
