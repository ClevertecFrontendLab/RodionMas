import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './pages/main/header/header';
import { MainPage } from './pages/main';
import { Footer } from './pages/main/footer/footer';
import { BookPage } from './pages/book';
import { fetchBooks, fetchCategories, fetchIdBook } from './store/bookslice';
import { Loading } from './pages/loading/loading';
import { Err } from './pages/err/err';

export const Layout = () => {
  const books = useSelector((state) => state.book);
  const pageBookId = useSelector((state) => state.book.bookId);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuMode = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headerRef = useRef(null);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBooks());
    dispatch(fetchIdBook(2))
  }, [dispatch]);

  return (
    <>
      <Header
        headerRef={headerRef}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        toggleMenuMode={toggleMenuMode}
      />
      {books.loading ? <Loading /> : null}
      {books.error === undefined && <Err dispatch={dispatch} />}
      <Routes>
        <Route
          path='*'
          element={
            <MainPage
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
          // было path='/book/*'
          path='/books/all/:id'
          element={
            <BookPage
            books={books}
              pageBookId={pageBookId}
              headerRef={headerRef}
              toggleMenuMode={toggleMenuMode}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};
