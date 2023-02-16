import { useSelector } from 'react-redux';
import style from './book-page.module.css';
import { Sidebar } from '../main/menu/sidebar/sidebar';
import { AboutBook } from './about-book/about-book';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Detailed } from './detailed/detailed';
import { Raiting } from './raiting/raiting';
import { Reviews } from './reviews/reviews';
import { Err } from '../err/err';

export const BookPage = ({ dispatch, pageBookId, isMenuOpen, setIsMenuOpen, headerRef }) => {
  const aboutBookError = useSelector((state) => state.book.errorIdBook);
  const bookPageLoad =  useSelector(state => state.book.loading)
  return (
    <div>
      {aboutBookError === undefined && bookPageLoad === false ? (
        <Err />
      ) : (
        <section className={style.wrapper}>
          <div className={style.navBook}>
            <Sidebar headerRef={headerRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <Breadcrumbs dispatch={dispatch} pageBookId={pageBookId} />
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
