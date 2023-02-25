/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrowDown from '../../../../assets/img/Icon_Chevron.png';
import style from './sidebar.module.css';
import { filterBook } from '../../../../store/bookslice';

export const Sidebar = ({
  active,
  setActive,
  books,
  dispatch,
  isMenuOpen,
  setIsMenuOpen,
  headerRef,
  toggleMenuMode,
}) => {
  const categories = useSelector((state) => state.book.categories);
  const [activeLink, setActiveLink] = useState(0);
  const [countBooks, setCountBooks] = useState([]);

  // ЗАкрыть меню навигации при клике вне эелемента
  const menuRef = useRef(null);
  // ЗАкрыть меню навигации при клике вне эелемента
  const errBooksId = useSelector((state) => state.book.errorIdBook);
  const errAllBooks = useSelector((state) => state.book.error);

  useEffect(() => {
    if (countBooks.length === 0 && books.books.length !== 0 && categories.length !== 0) {
      const countBooksFn = () => {
        if (books.books.length !== 0 && categories.length !== 0) {
          books.books.map((el) => {
            countBooks.map((element) => {
              el.categories.map((e) => {
                return e.indexOf(element.name) === 0 ? ++element.count : '';
              });
            });
          });
        }
      };
      let newData = categories.map((item) => Object.assign({}, item, { count: 0 }));
      countBooks.length === 0 && newData.map((e) => countBooks.push(e));
      countBooksFn();
    }
  });

  useEffect(() => {
    const bodyClick = (e) => {
      if (!menuRef.current.contains(e.target) && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', bodyClick, true);
    return () => {
      document.removeEventListener('click', bodyClick, true);
    };
  }, [headerRef, setIsMenuOpen, menuRef]);

  //--
  // Повернуть стрелку, свернуть содержимое всех книг
  const [rotateArrow, setRotateArrow] = useState(true);
  // --
  return (
    <nav data-test-id='burger-navigation' ref={menuRef} className={!isMenuOpen ? style.wrapper : style.navMenuActive}>
      <button
        data-test-id='navigation-showcase'
        onClick={() => {
          setRotateArrow(!rotateArrow);
          setActiveLink(0);
        }}
        className={activeLink === 0 ? style.btnWrapperLink1 : style.defaultBtn}
        type='button'
      >
        <Link
          data-test-id='burger-showcase'
          to='/'
          className={activeLink === 0 ? style.linkMenuActive : style.btnMenu1}
        >
          Витрина книг
        </Link>
        {(errAllBooks === '' && errBooksId === '') || (errAllBooks === '' && errBooksId === null) ? (
          <img
            data-test-id='burger-navigation'
            className={rotateArrow ? style.arrow : style.arrowDown}
            src={arrowDown}
            alt='arrow'
          />
        ) : (
          ''
        )}
      </button>
      <ul className={style.list}>
        {categories.map((book, i) => (
          <div key={book.id} className={rotateArrow ? style.liBlock : style.hide}>
            <li
              data-test-id={`burger-${book.path !== 'all' ? book.path : 'books'}`}
              className={rotateArrow ? style.item : style.hide}
            >
              <Link
                data-test-id={`navigation-${book.path !== 'all' ? book.path : 'books'}`}
                onClick={() => {
                  dispatch(filterBook(book.name));
                  setActive(i);
                  setActiveLink(0);
                  toggleMenuMode();
                }}
                className={active === i && activeLink === 0 ? style.active : style.link}
                to={`/books/${book.path}`}
              >
                {book.name}
              </Link>
            </li>
            {book.name !== 'Все книги' &&
              countBooks?.map(
                (el) =>
                  el.name === book.name && (
                    <span
                      data-test-id={`navigation-book-count-for-${book.path}`}
                      key={Math.random()}
                      className={style.quantityDesctop}
                    >
                      {el.count}
                    </span>
                  )
              )}
            {countBooks?.map(
              (el) =>
                el.name === book.name && (
                  <span
                    data-test-id={`burger-book-count-for-${book.path}`}
                    key={Math.random()}
                    className={style.quantity}
                  >
                    {el.count}
                  </span>
                )
            )}
          </div>
        ))}
      </ul>
      <button
        onClick={() => {
          setActiveLink(1);
          setRotateArrow(false);
          if (isMenuOpen) {
            toggleMenuMode();
          }
        }}
        data-test-id='burger-terms'
        className={style.btnWrapperLink2}
        type='button'
      >
        <Link
          data-test-id='navigation-terms'
          to='/direction'
          className={activeLink === 1 ? style.linkMenuActive : style.btnMenu2}
          type='button'
        >
          Правила пользования
        </Link>
      </button>
      <button
        onClick={() => {
          setActiveLink(2);
          setRotateArrow(false);
          if (isMenuOpen) {
            toggleMenuMode();
          }
        }}
        data-test-id='burger-contract'
        className={style.btnWrapperLink3}
        type='button'
      >
        <Link
          data-test-id='navigation-contract'
          to='/offer'
          className={
            activeLink === 2
              ? style.linkMenuActive
              : style.btnMenu3 && activeLink === 0
              ? style.btnMenu
              : style.btnMenu3
          }
          type='button'
        >
          Договор оферты
        </Link>
      </button>
      <div className={style.prifleUser}>
        <hr className={style.line} />
        <Link
          to='/offer'
          onClick={() => {
            setActiveLink(3);
          }}
          className={
            activeLink === 3
              ? style.linkMenuActive
              : style.btnMenu4 && activeLink === 0
              ? style.btnMenu4
              : style.btnMenu4
          }
          type='button'
        >
          Профиль
        </Link>
        <Link
          to='/offer'
          onClick={() => {
            setActiveLink(4);
          }}
          className={
            activeLink === 4
              ? style.linkMenuActive
              : style.btnMenu5 && activeLink === 0
              ? style.btnMenu
              : style.btnMenu5
          }
          type='button'
        >
          Выход
        </Link>
      </div>
    </nav>
  );
};
