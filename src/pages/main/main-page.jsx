import { Menu } from './menu/menu';
import { Sidebar } from './menu/sidebar/sidebar';

export const MainPage = ({
  filteredBooks,
  setValue,
  value,
  dispatch,
  books,
  isMenuOpen,
  setIsMenuOpen,
  headerRef,
  toggleMenuMode,
  filteredBooksAll,
  setActive,
  active,
}) => (
  <section className='main-page'>
    <div className='wrapper'>
      <Sidebar
        setActive={setActive}
        active={active}
        dispatch={dispatch}
        toggleMenuMode={toggleMenuMode}
        headerRef={headerRef}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        books={books}
      />
      <Menu
        filteredBooksAll={filteredBooksAll}
        filteredBooks={filteredBooks}
        value={value}
        setValue={setValue}
        dispatch={dispatch}
        books={books}
      />
    </div>
  </section>
);
