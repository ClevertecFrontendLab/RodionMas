/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searhOrange from '../../../../../../assets/img/searchOrange.png'
import style from './search.module.css';
import searchImg from '../../../../../../assets/img/Icon_Action.png';
import X from '../../../../../../assets/img/books/X.png';
import { sortBook } from '../../../../../../store/bookslice';

export const Search = ({setFilter, filteredBooks, setValue, value, dispatch, books, activeGrid, setActiveGrid }) => {
  const [inpSearch, setInpSearch] = useState(false);
  const loadingSearch = useSelector((state) => state.book.loading);
  const errSearch = useSelector((state) => state.book.error);
  const [sortBooks, setSortBooks] = useState(true);
  const orangeSearchRef = useRef(null)
  const [openImg, setOpenImg] = useState(false)
  const closeImg = () => {
    setOpenImg(false)
  }
  useEffect(() => {
    dispatch(sortBook(sortBooks));
    if(!orangeSearchRef) return
    const imgHandleClick = e => {
      if(!orangeSearchRef.current) return
      if(!orangeSearchRef.current.contains(e.target)) {
        closeImg()
      }
    }
    document.addEventListener('click', imgHandleClick)
    return () => {
      document.removeEventListener('click', imgHandleClick)
    }
  }, [sortBooks, value, closeImg])
  return (
    <section className={style.wrapper}>
      {!loadingSearch && errSearch !== undefined ? (
        <div className={style.searchMenu}>
          <div className={style.searchBlock}>
            <button
              onClick={() => setInpSearch(!inpSearch)}
              className={!inpSearch ? style.searchBtn : style.hide}
              type='button'
            >
              <img className={style.searchImg} data-test-id='button-search-open' src={searchImg} alt='search' />
            </button>
            <button
              data-test-id='button-search-close'
              onClick={() => setInpSearch(false)}
              className={inpSearch ? style.close : style.hide}
              type='button'
            >
              <img src={X} alt='close' />
            </button>
            <div className={style.orangeBlock}>
              <img  className={openImg ? style.orangeSearch : style.hide} src={searhOrange} alt="search-image" />
            <input
              ref={orangeSearchRef}
              data-test-id='input-search'
              placeholder='Поиск книги или автора…'
              className={!inpSearch ? style.search : style.showSearch}
              type='text'
              onClick={() => setOpenImg(true)}
              onChange={(e) => {
                value = e.target.value
                setFilter(e.target.value)
                setValue(e.target.value)
              }}
            />
            </div>
          </div>
          <div className={!inpSearch ? style.sort : style.hideMobile}>
            <button
              onClick={() => {
                setSortBooks(!sortBooks);
                dispatch(sortBook(sortBooks));
              }}
              type='button'
              className={style.sortBtn}
              data-test-id='sort-rating-button'
            >
              <svg
                className={sortBooks === true ? style.sortImg : style.sortImgRotate}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g opacity='0.9'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H11.4999C11.7761 3.5 11.9999 3.72386 11.9999 4C11.9999 4.27614 11.7761 4.5 11.4999 4.5H3C2.72386 4.5 2.5 4.27614 2.5 4ZM11.5 6.5C11.7761 6.5 12 6.72386 12 7V11.793L13.6464 10.1468C13.8417 9.95155 14.1583 9.95157 14.3535 10.1468C14.5488 10.3421 14.5487 10.6587 14.3535 10.854L11.8536 13.3535L11.8535 13.3536C11.7631 13.444 11.6381 13.5 11.5 13.5L11.497 13.5C11.4303 13.4996 11.3667 13.4861 11.3086 13.4621C11.2496 13.4377 11.1944 13.4015 11.1464 13.3536L8.64645 10.8536C8.45118 10.6583 8.45118 10.3417 8.64645 10.1464C8.84171 9.95118 9.15829 9.95118 9.35355 10.1464L11 11.7929V7C11 6.72386 11.2239 6.5 11.5 6.5ZM3 7.5C2.72386 7.5 2.5 7.72386 2.5 8C2.5 8.27614 2.72386 8.5 3 8.5H7.49994C7.77608 8.5 7.99994 8.27614 7.99994 8C7.99994 7.72386 7.77608 7.5 7.49994 7.5H3ZM3 11.5C2.72386 11.5 2.5 11.7239 2.5 12C2.5 12.2761 2.72386 12.5 3 12.5H6.5C6.77614 12.5 7 12.2761 7 12C7 11.7239 6.77614 11.5 6.5 11.5H3Z'
                    fill='#A7A7A7'
                  />
                </g>
              </svg>
              <span>По рейтингу</span>
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      {!loadingSearch && errSearch !== undefined ? (
        <div className={!inpSearch ? style.gridBlock : style.hideMobile}>
          <button
            data-test-id='button-menu-view-window'
            onClick={() => {
              setActiveGrid(true);
            }}
            className={activeGrid === true ? style.gridBtn : style.defaulGridtBtn}
            type='button'
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.14773 3.5C3.79 3.5 3.5 3.79 3.5 4.14773V9.32955C3.5 9.68728 3.79 9.97727 4.14773 9.97727H9.32955C9.68728 9.97727 9.97727 9.68728 9.97727 9.32955V4.14773C9.97727 3.79 9.68728 3.5 9.32955 3.5H4.14773ZM4.79545 8.68182V4.79545H8.68182V8.68182H4.79545ZM11.9205 3.5C11.5627 3.5 11.2727 3.79 11.2727 4.14773V9.32955C11.2727 9.68728 11.5627 9.97727 11.9205 9.97727H17.1023C17.46 9.97727 17.75 9.68728 17.75 9.32955V4.14773C17.75 3.79 17.46 3.5 17.1023 3.5H11.9205ZM12.5682 8.68182V4.79545H16.4545V8.68182H12.5682ZM3.5 11.9205C3.5 11.5627 3.79 11.2727 4.14773 11.2727H9.32955C9.68728 11.2727 9.97727 11.5627 9.97727 11.9205V17.1023C9.97727 17.46 9.68728 17.75 9.32955 17.75H4.14773C3.79 17.75 3.5 17.46 3.5 17.1023V11.9205ZM4.79545 12.5682V16.4545H8.68182V12.5682H4.79545ZM11.9205 11.2727C11.5627 11.2727 11.2727 11.5627 11.2727 11.9205V17.1023C11.2727 17.46 11.5627 17.75 11.9205 17.75H17.1023C17.46 17.75 17.75 17.46 17.75 17.1023V11.9205C17.75 11.5627 17.46 11.2727 17.1023 11.2727H11.9205ZM12.5682 16.4545V12.5682H16.4545V16.4545H12.5682Z'
                fill='white'
              />
            </svg>
          </button>
          <button
            data-test-id='button-menu-view-list'
            onClick={() => {
              setActiveGrid(false);
            }}
            type='button'
            className={activeGrid === false ? style.listBtnActive : style.defaultListBtn}
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.0835 10C2.0835 9.56282 2.43794 9.20837 2.87516 9.20837H17.1252C17.5624 9.20837 17.9168 9.56282 17.9168 10C17.9168 10.4373 17.5624 10.7917 17.1252 10.7917H2.87516C2.43794 10.7917 2.0835 10.4373 2.0835 10Z'
                fill='#A7A7A7'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.0835 5.25004C2.0835 4.81282 2.43794 4.45837 2.87516 4.45837H17.1252C17.5624 4.45837 17.9168 4.81282 17.9168 5.25004C17.9168 5.68727 17.5624 6.04171 17.1252 6.04171H2.87516C2.43794 6.04171 2.0835 5.68727 2.0835 5.25004Z'
                fill='#A7A7A7'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.0835 14.75C2.0835 14.3128 2.43794 13.9584 2.87516 13.9584H17.1252C17.5624 13.9584 17.9168 14.3128 17.9168 14.75C17.9168 15.1873 17.5624 15.5417 17.1252 15.5417H2.87516C2.43794 15.5417 2.0835 15.1873 2.0835 14.75Z'
                fill='#A7A7A7'
              />
            </svg>
          </button>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
