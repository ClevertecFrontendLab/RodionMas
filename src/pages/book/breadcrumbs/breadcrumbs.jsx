/* eslint-disable */
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBooks, filterBook } from '../../../store/bookslice';
import style from './breadcrumbs.module.css';

export const Breadcrumbs = ({ setActive, pageBookId, dispatch }) => {
  const category = useSelector((state) => state.book.categories);
  const paramsBreadCrumb = useParams();
  const breadCrumbsCategory = category.map((el) => (el.path === paramsBreadCrumb.category ? el.name : ''));
  const arrForLink = category.map((el) => el.path === paramsBreadCrumb.category && el.name);
  let linkFilterr = [...arrForLink].filter((el) => el !== false);
  
  return (
    <section className={style.wrapper}>
      {pageBookId !== null ? (
        <div className={style.bg}>
          <div className={style.breadLinkBox}>
            <Link
            data-test-id={`breadcrumbs-link`}
              to={`/books/${paramsBreadCrumb.category}`}
              onClick={() => {
                dispatch(filterBook(linkFilterr[0]));
                dispatch(fetchBooks());
                arrForLink.map((el, i) => el !== false && setActive(i))
              }}
              className={style.link}
            >
              {pageBookId.categories === undefined ? '' : breadCrumbsCategory}
            </Link>
            <span className={style.slash}>
              {' '}
              <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 19L10 1' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
              </svg>
            </span>
            <p data-test-id='book-name' className={style.link}>{pageBookId.title}</p>
          </div>
        </div>
      ) : (
        <div className={style.bg}>
          <div className={style.breadLinkBox}>
            <Link to='/' onClick={() => dispatch(filterBook(pageBookId.categories[0]))} className={style.link}>
              Все книги
            </Link>
            <span className={style.slash}>
              {' '}
              <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 19L10 1' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
              </svg>
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
