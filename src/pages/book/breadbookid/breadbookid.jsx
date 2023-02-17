import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterBook } from '../../../store/bookslice';
import style from './breadbookid.module.css';

export const Breadbookid = ({ pageBookId, dispatch }) => {
  const errorIdBook = useSelector((state) => state.book.errorIdBook);
  const categoriesBookId = useSelector((state) => state.book.categoriesBookId);
  console.log(errorIdBook);
  // categories.map(el => el.name === pageBookId.categories[0] && path = el.path)
  console.log(pageBookId);
  return (
    <section className={style.wrapper}>
      <div className={style.bg}>
        <div className={style.breadLinkBox}>
          <Link to='/' onClick={() => dispatch(filterBook())} className={style.link}>
            {/* {categoriesBookId} */}
            Бизнес книги
          </Link>
          <span className={style.slash}>
            {' '}
            <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 19L10 1' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};
