import { useState } from 'react';
import avatar from '../../../assets/img/books/avatar.png';
import blackArrow from '../../../assets/img/books/blackArrow.png';
import ratingTrue from '../../../assets/img/rating.png';
import ratingFalse from '../../../assets/img/ratingFalse.png';
import style from './reviews.module.css';

export const Reviews = ({ pageBookId }) => {
  const [arrow, serArrow] = useState(false);
  return (
    <div>
      {pageBookId !== null && (
        <section className={style.wrapper}>
          <div className={style.titleBox}>
            <h5 className={style.title}>
              Отзывы <span className={style.count}>{pageBookId.comments !== null && pageBookId.comments.length}</span>
            </h5>
            <button
              data-test-id='button-hide-reviews'
              className={style.arrowBtn}
              onClick={() => serArrow(!arrow)}
              type='button'
            >
              <img className={!arrow ? style.arrow : style.arrowRotate} src={blackArrow} alt='arrow' />
            </button>
          </div>
          <div className={!arrow ? style.commentBox : style.hide}>
            {pageBookId !== null && pageBookId.comments !== null
              ? pageBookId.comments.map((el) => (
                  <div key={el.id} className={style.personBox}>
                    <div className={style.person}>
                      <img className={style.avatar} src={avatar} alt='avatar' />
                      <div className={style.avatarTextBlock}>
                        <p className={style.name}>
                          {el.user.firstName} {el.user.lastName}
                        </p>
                        <p className={style.date}>20 июня 2018</p>
                      </div>
                    </div>
                    <div className={style.ratingBlock}>
                      {[...new Array(5)].map((_, inde) => (
                        <div key={Math.random()}>
                          {inde + 1 <= Math.round(el.rating) ? (
                            <img src={ratingTrue} alt='rating' />
                          ) : (
                            <img src={ratingFalse} alt='rating' />
                          )}
                        </div>
                      ))}
                    </div>
                    <p className={style.comment}>{el.text}</p>
                  </div>
                ))
              : ''}
          </div>
          <button data-test-id='button-rating' type='button' className={style.btn}>
            ОЦЕНИТЬ КНИГУ
          </button>
        </section>
      )}
    </div>
  );
};
