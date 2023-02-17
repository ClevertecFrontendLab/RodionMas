import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './filterbooks.module.css';
import catImg from '../../../../../assets/img/books/cat.jpg';
import ratingTrue from '../../../../../assets/img/rating.png';
import ratingFalse from '../../../../../assets/img/ratingFalse.png';
import { Search } from '../books/search/search';
import { fetchIdBook } from '../../../../../store/bookslice';

export const Filterbooks = ({ books, dispatch }) => {
  const [activeGrid, setActiveGrid] = useState(true);
  const params = useParams();
  // console.log(params.category);
  // console.log(books.filterArr)
  return (
    <section className={style.books}>
      <Search setActiveGrid={setActiveGrid} activeGrid={activeGrid} />
        {activeGrid === true ? (
          <div className={style.gridBook}>
            {books.filterArr.map((book, i) => (
              <div className={style.aboutBookLink} key={Math.random()} data-test-id='card'>
                <Link onClick={() => dispatch(fetchIdBook(book.id))} to={`/books/all/${book.id}`}>
                  <img
                    className={style.bookMobile}
                    src={book.image === null ? catImg : `https://strapi.cleverland.by${book.image.url}`}
                    alt='book'
                  />
                  {book.rating === null ? (
                    <p className={style.raiting}>еще нет оценок</p>
                  ) : (
                    <div className={style.ratingBlock}>
                      {[...new Array(5)].map((_, inde) => (
                        <div key={book.id + Math.random()}>
                          {inde + 1 <= Math.round(book.rating) ? (
                            <img src={ratingTrue} alt='rating' />
                          ) : (
                            <img src={ratingFalse} alt='rating' />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className={style.nameBookBlock}>
                    <p className={style.nameBook}>{book.title}</p>
                  </div>

                  <p className={style.authorBook}>
                    {book.authors}, {book.issueYear}
                  </p>
                </Link>
                <button
                  className={
                    !book.booking && !book.delivery
                      ? style.reservationBtn
                      : book.booking !== null
                      ? style.gridEngaged
                      : style.gridDefaultReservation
                  }
                  type='button'
                >
                  {!book.booking && !book.delivery
                    ? 'Забронировать'
                    : book.booking !== null
                    ? `Занята до ${book.booking.dateOrder.slice(5, -17)} ${book.booking.dateOrder.slice(8, -14)}`
                    : 'Забронирована'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={style.listBook}>
            {books.filterArr.map((book, i) => (
              <div className={style.aboutListBookLink} key={Math.random()}>
                <Link className={style.listLink} onClick={() => dispatch(fetchIdBook(book.id))} to={`/book/${book.id}`}>
                  <div className={style.imgBlock}>
                    <img
                      className={style.listBookImg}
                      src={book.image === null ? catImg : `https://strapi.cleverland.by${book.image.url}`}
                      alt='book'
                    />
                  </div>
                </Link>
                <div className={style.listDescription}>
                  <p className={style.listBookName}>{book.title}</p>
                  <p className={style.listAuthor}>
                    {book.authors}, {book.issueYear}
                  </p>
                  <div className={style.raitingReservationBtn}>
                    {book.rating === null ? (
                      <p className={style.listRaiting}>еще нет оценок</p>
                    ) : (
                      <div className={style.ratingBlock}>
                        {[...new Array(5)].map((_, inde) => (
                          <div key={book.id + Math.random()}>
                            {inde + 1 <= Math.round(book.rating) ? (
                              <img src={ratingTrue} alt='rating' />
                            ) : (
                              <img src={ratingFalse} alt='rating' />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                      className={
                        !book.booking && !book.delivery
                          ? style.listReservationBtn
                          : book.booking !== null
                          ? style.engaged
                          : style.defaultReservation
                      }
                      type='button'
                    >
                      {!book.booking && !book.delivery
                        ? 'Забронировать'
                        : book.booking !== null
                        ? `Занята до ${book.booking.dateOrder.slice(5, -17)} ${book.booking.dateOrder.slice(8, -14)}`
                        : book.booking !== null
                        ? 'Забронирована'
                        : ''}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </section>
  );
};
