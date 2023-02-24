import React from 'react';
import raitingTrue from '../../../assets/img/rating.png';
import ratingFalse from '../../../assets/img/ratingFalse.png';
import zerorating from '../../../assets/img/books/zerorating.png';
import style from './raiting.module.css';

export const Raiting = ({ pageBookId }) => (
  <div>
    {pageBookId !== null && (
      <section className={style.wrapper}>
        <h5 className={style.raitingText}>Рейтинг</h5>
        {pageBookId.rating === null ? (
          <div className={style.zeroRaitingBox}>
            <img className={style.zeroRaiting} src={zerorating} alt='raiting' />
            <p>Еще нет оценок</p>
          </div>
        ) : (
          <div className={style.raitingBox}>
            {[...new Array(5)].map((el, inde) => (
              <div key={Math.random()}>
                {inde + 1 <= Math.round(pageBookId.rating) ? (
                  <img src={raitingTrue} alt='rating' />
                ) : (
                  <img src={ratingFalse} alt='rating' />
                )}
              </div>
            ))}
            <h5 className={style.raitingNum}>{pageBookId.rating.toFixed(1)}</h5>
          </div>
        )}
      </section>
    )}
  </div>
);
