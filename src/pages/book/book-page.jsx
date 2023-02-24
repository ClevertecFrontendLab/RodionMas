import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './book-page.module.css';
import { Sidebar } from '../main/menu/sidebar/sidebar';
import { AboutBook } from './about-book/about-book';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Detailed } from './detailed/detailed';
import { Raiting } from './raiting/raiting';
import { Reviews } from './reviews/reviews';
import { Err } from '../err/err';
import { Breadbookid } from './breadbookid/breadbookid';
import { fetchIdBook } from '../../store/bookslice';

export const BookPage = ({ books, setActive, dispatch, pageBookId, isMenuOpen, setIsMenuOpen, headerRef }) => {
  const aboutBookError = useSelector((state) => state.book.errorIdBook);
  const bookPageLoad =  useSelector(state => state.book.loading)
  const paramsIdBook = useParams()
  useEffect(() => {
    dispatch(fetchIdBook(paramsIdBook.id));
  }, [dispatch, paramsIdBook.id])
  return (
    <div>
      {aboutBookError === undefined && bookPageLoad === false ? (
        <>
        <Err />
        {bookPageLoad === false && <Breadbookid dispatch={dispatch} pageBookId={pageBookId} />}
        </>
      ) : (
        <section className={style.wrapper}>
          <div className={style.navBook}>
            <Sidebar books={books} headerRef={headerRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <Breadcrumbs setActive={setActive} dispatch={dispatch} pageBookId={pageBookId} />
          {pageBookId !== null && (
            <>
              <AboutBook pageBookId={pageBookId} />
              <Raiting pageBookId={pageBookId} />
              <Detailed pageBookId={pageBookId} />
              <Reviews pageBookId={pageBookId} />
            </>
          )}
        </section>
      )}
    </div>
  );
};
