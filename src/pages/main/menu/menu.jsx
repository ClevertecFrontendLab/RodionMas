import { Route, Routes } from 'react-router-dom';
import { Direction } from './content/direction/direction';
import { Filterbooks } from './content/filterbooks/filterbooks';
import { Offer } from './content/offer/offer';
import style from './menu.module.css';

export const Menu = ({ filteredBooksAll, setValue, filteredBooks, value, books, dispatch }) => (
  <div className={style.wrapper}>
    <Routes>
      <Route
        path='/books/:category'
        element={
          <Filterbooks
            setValue={setValue}
            filteredBooks={filteredBooks}
            value={value}
            dispatch={dispatch}
            books={books}
            filteredBooksAll={filteredBooksAll}
          />
        }
      />
      <Route path='direction' element={<Direction />} />
      <Route path='offer' element={<Offer />} />
    </Routes>
  </div>
);
