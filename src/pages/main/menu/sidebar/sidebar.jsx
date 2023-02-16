import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrowDown from '../../../../assets/img/Icon_Chevron.png';
import style from './sidebar.module.css';
import { filterBook } from '../../../../store/bookslice';


export const Sidebar = ({ books, dispatch, isMenuOpen, setIsMenuOpen, headerRef, toggleMenuMode }) => {
  const [active, setActive] = useState(0);
  const [activeLink, setActiveLink] = useState(0);
  // ЗАкрыть меню навигации при клике вне эелемента
  const menuRef = useRef(null);
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
  const errBooksId = useSelector(state => state.book.errorIdBook)
  const errAllBooks = useSelector(state => state.book.error)
  // console.log(errAllBooks)
  const categories = useSelector((state) => state.book.categories);
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
       { errAllBooks === '' && errBooksId === '' ? <img
          data-test-id='burger-navigation'
          className={rotateArrow ? style.arrow : style.arrowDown}
          src={arrowDown}
          alt='arrow'
        /> : ''}
      </button>
      <ul className={style.list}>
        { errAllBooks === '' && errBooksId === '' ? categories.map((book, i) => (
          <li data-test-id='burger-books' className={rotateArrow ? style.item : style.hide} key={book.id}>
            <Link
              data-test-id='navigation-books'
              onClick={() => {
                dispatch(filterBook(book.name))
                setActive(i);
                setActiveLink(0);
                setRotateArrow(false);
                toggleMenuMode();
                
              }}
              className={active === i && activeLink === 0 ? style.active : style.link}
              to={`/books/${book.path}`}
            >
              {book.name}
              <span className={style.quantity}>{book.quantity}</span>
            </Link>
          </li>
        )) : ''}
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
