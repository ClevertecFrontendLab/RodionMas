import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Books } from './content/books/books';
import { Direction } from './content/direction/direction';
import { Filterbooks } from './content/filterbooks/filterbooks';
import { Offer } from './content/offer/offer';
import style from './menu.module.css';

export const Menu = ({books, dispatch}) => (
  <div className={style.wrapper}>
    <Routes>
      <Route index={true} element={<Books dispatch={dispatch} books={books} />} />
      <Route path='/books/:category' element={<Filterbooks dispatch={dispatch} books={books} />} />
      <Route path='direction' element={<Direction />} />
      <Route path='offer' element={<Offer />} />
    </Routes>
  </div>
);
