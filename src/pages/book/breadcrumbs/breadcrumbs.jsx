import React from 'react';
import { Link } from 'react-router-dom';
import style from './breadcrumbs.module.css';

export const Breadcrumbs = () => {
  console.log();
  return (
    <section className={style.wrapper}>
      <div className={style.bg}>
        <div className={style.breadLinkBox}>
          <Link to='/book' className={style.link}>Бизнес книги</Link>
          <span className={style.slash}>
            {' '}
            <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 19L10 1' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </span>
          <Link to='/book' className={style.link}>Грокаем алгоритмы.</Link>
        </div>
      </div>
    </section>
  );
};
