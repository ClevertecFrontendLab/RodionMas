/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './pages/main/header/header';
import { MainPage } from './pages/main';
import { Footer } from './pages/main/footer/footer';
import { BookPage } from './pages/book';
import { fetchBooks, fetchCategories, fetchIdBook, filterBook, sortBook } from './store/bookslice';
import { Loading } from './pages/loading/loading';
import { Err } from './pages/err/err';

export const Layout = () => {
  //для активной ссылки в категориях
  const [active, setActive] = useState(0);
  //для активной ссылки в категориях
  const books = useSelector((state) => state.book);
  const pageBookId = useSelector((state) => state.book.bookId);
  const category = useSelector(state => state.book.categories)
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuMode = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headerRef = useRef(null);
  const mainPageLocation = useLocation();
  //Поиск книги input
  const [value, setValue] = useState('');
  const filteredBooks = books.filterArr.filter((book) => {
    return book.title.toLowerCase().includes(value.toLowerCase());
  });
  const filteredBooksAll = books.books.filter((book) => {
    return book.title.toLowerCase().includes(value.toLowerCase());
  });
  //Поиск книги input
 
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBooks());
    // if (mainPageLocation.pathname === '/') {
    //   dispatch(fetchIdBook(2));
    // }
  }, [dispatch, mainPageLocation.pathname]);

  return (
    <div>
      <Header
        headerRef={headerRef}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        toggleMenuMode={toggleMenuMode}
      />
      {!books.loading || category.length !== 0 ? null : <Loading />}
      {books.error === undefined && <Err />}
      <Routes>
        <Route path='/' element={<Navigate to='/books/all/' />} />
        <Route
          path='*'
          element={
            <MainPage
              active={active}
              setActive={setActive}
              filteredBooksAll={filteredBooksAll}
              filteredBooks={filteredBooks}
              setValue={setValue}
              value={value}
              dispatch={dispatch}
              books={books}
              headerRef={headerRef}
              toggleMenuMode={toggleMenuMode}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          }
        />
        <Route
          path='/books/:category/:id'
          element={
            <BookPage
              dispatch={dispatch}
              books={books}
              pageBookId={pageBookId}
              headerRef={headerRef}
              toggleMenuMode={toggleMenuMode}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setActive={setActive}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
