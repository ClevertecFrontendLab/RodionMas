import { Link } from 'react-router-dom';
import catImg from '../../../../../../assets/img/books/cat.jpg';
import ratingTrue from '../../../../../../assets/img/rating.png';
import ratingFalse from '../../../../../../assets/img/ratingFalse.png';
import { fetchIdBook, getCategoriesBookId } from '../../../../../../store/bookslice';
import style from '../filterbooks.module.css';

export const Gridbook = ({ params, ligth, dispatch, books, filteredBooks }) => (
  <div className={style.gridBook}>
    {books.books.length === 0
      ? ''
      : filteredBooks.map((book) => (
          <div className={style.aboutBookLink} key={Math.random()} data-test-id='card'>
            <Link
              onClick={() => {
                dispatch(fetchIdBook(book.id));
                dispatch(getCategoriesBookId(book.categories[0]));
              }}
              to={`/books/${params.category}/${book.id}`}
            >
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
                <p className={style.nameBook}>{ligth(book.title)}</p>
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
                ? `Занята до ${book.booking.dateOrder.slice(5, -17)}.${book.booking.dateOrder.slice(8, -14)}`
                : 'Забронирована'}
            </button>
          </div>
        ))}
  </div>
);
