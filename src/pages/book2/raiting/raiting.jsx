import React from 'react';
import star from '../../../assets/img/books/star.png';
import style from './raiting.module.css';

export const Raiting = () => {
  console.log();
  return (
    <section className={style.wrapper}>
      <h5 className={style.raitingText}>Рейтинг</h5>
      <div className={style.raitingBox}>
        <img className={style.star} src={star} alt='raiting' />
        <h5 className={style.raitingNum}>4.3</h5>
      </div>
    </section>
  );
};
