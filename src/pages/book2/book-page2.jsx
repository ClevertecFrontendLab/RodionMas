import style from './book-page.module.css';
import { Sidebar } from '../main/menu/sidebar/sidebar';
import { AboutBook } from './about-book/about-book';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Detailed } from './detailed/detailed';
import { Raiting } from './raiting/raiting';
import { Reviews } from './reviews/reviews';

export const BookPage2 = ({ isMenuOpen, setIsMenuOpen, headerRef }) => (
  <section className={style.wrapper}>
    <div className={style.navBook}>
      <Sidebar headerRef={headerRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
    <Breadcrumbs />
    <AboutBook />
    <Raiting />
    <Detailed />
    <Reviews />
  </section>
);
