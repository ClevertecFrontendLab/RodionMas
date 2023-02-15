import { Menu } from './menu/menu';
import { Sidebar } from './menu/sidebar/sidebar';

export const MainPage = ({ dispatch, books, isMenuOpen, setIsMenuOpen, headerRef, toggleMenuMode }) => (
  <section className='main-page'>
    <div className='wrapper'>
      <Sidebar
        dispatch={dispatch}
        toggleMenuMode={toggleMenuMode}
        headerRef={headerRef}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        books={books}
      />
      <Menu dispatch={dispatch} books={books} />
    </div>
  </section>
);
