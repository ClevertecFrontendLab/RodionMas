import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterBook } from '../../../store/bookslice';
import style from './breadcrumbs.module.css';

export const Breadcrumbs = ({ pageBookId, dispatch }) => {
  // const categories = useSelector(state => state.book.categories)
  // categories.map(el => el.name === pageBookId.categories[0] && path = el.path)
  console.log(pageBookId)
  return (
    <section className={style.wrapper}>
      {pageBookId !== null && <div className={style.bg}>
        <div className={style.breadLinkBox}>
          <Link to='/' onClick={() => dispatch(filterBook())} className={style.link}>
            {pageBookId.categories}
          </Link>
          <span className={style.slash}>
            {' '}
            <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 19L10 1' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </span>
          <p className={style.link}>{pageBookId.title}</p>
        </div>
      </div>}
    </section>
  );
};
