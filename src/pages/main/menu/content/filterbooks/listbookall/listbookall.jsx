import { Link } from 'react-router-dom';
import catImg from '../../../../../../assets/img/books/cat.jpg';
import ratingTrue from '../../../../../../assets/img/rating.png';
import ratingFalse from '../../../../../../assets/img/ratingFalse.png';
import { fetchIdBook, getCategoriesBookId } from '../../../../../../store/bookslice';
import style from '../filterbooks.module.css';

export const Listbookall = ({ params, ligth, dispatch, filteredBooksAll }) => (
  <div className={style.listBook}>
    {filteredBooksAll.map((book) => (
      <div className={style.aboutListBookLink} key={Math.random()}>
        <Link
          className={style.listLink}
          onClick={() => {
            dispatch(fetchIdBook(book.id));
            dispatch(getCategoriesBookId(book.categories[0]));
          }}
          to={`/books/${params.category}/${book.id}`}
        >
          <div className={style.imgBlock}>
            <img
              className={style.listBookImg}
              src={book.image === null ? catImg : `https://strapi.cleverland.by${book.image.url}`}
              alt='book'
            />
          </div>
        </Link>
        <div className={style.listDescription}>
          <p className={style.listBookName}>{ligth(book.title)}</p>
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
);
