/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './filterbooks.module.css';
import catImg from '../../../../../assets/img/books/cat.jpg';
import ratingTrue from '../../../../../assets/img/rating.png';
import ratingFalse from '../../../../../assets/img/ratingFalse.png';
import { Search } from '../books/search/search';
import { fetchIdBook, getCategoriesBookId } from '../../../../../store/bookslice';
import { ZerobookCategory } from './zerobook/zerobook';
import { HightLight } from './hightlight/hightlight';
import { ZerobookInput } from './zerobookinput/zerobookinput';
import { Gridbookall } from './gridbookall/gridbookall';
import { Listbookall } from './listbookall/listbookall';
import { Gridbook } from './gridbook/gridbook';
import { Listbook } from './listbook/listbook';

export const Filterbooks = ({ filteredBooksAll, setValue, filteredBooks, value, books, dispatch }) => {
  const [activeGrid, setActiveGrid] = useState(true);
  const params = useParams();
  const [filter, setFilter] = useState('');
  const ligth = useCallback(
    (str) => {
      return <HightLight value={filter} str={str} />;
    },
    [value]
  );
    useEffect(() => {

    }, [])
  return (
    <section className={style.books}>
      <Search
        setFilter={setFilter}
        filteredBooks={filteredBooks}
        value={value}
        setValue={setValue}
        dispatch={dispatch}
        books={books}
        setActiveGrid={setActiveGrid}
        activeGrid={activeGrid}
      />
      <>
        {params.category === 'all' ? (
          activeGrid === true ? (
            filteredBooksAll.length === 0 && value !== '' ? (
              <ZerobookInput />
            ) : (
              <Gridbookall
                params={params}
                ligth={ligth}
                dispatch={dispatch}
                books={books}
                filteredBooksAll={filteredBooksAll}
              />
            )
          ) : filteredBooksAll.length === 0 && value !== '' ? (
            <ZerobookInput />
          ) : (
            <Listbookall
              params={params}
              ligth={ligth}
              dispatch={dispatch}
              books={books}
              filteredBooksAll={filteredBooksAll}
            />
          )
        ) : filteredBooks.length !== 0 ? (
          <div>
            {activeGrid === true ? (
              filteredBooks.length === 0 && value !== '' ? (
                <ZerobookInput />
              ) : (
                <Gridbook
                  params={params}
                  ligth={ligth}
                  dispatch={dispatch}
                  books={books}
                  filteredBooks={filteredBooks}
                />
              )
            ) : filteredBooks.length === 0 && value !== '' ? (
              <ZerobookInput />
            ) : (
              <Listbook params={params}
              ligth={ligth}
              dispatch={dispatch}
              books={books}
              filteredBooks={filteredBooks} />
            )}
          </div>
        ) : (
          <ZerobookCategory filteredBooks={filteredBooks} filteredBooksAll={filteredBooksAll} value={value} />
        )}
      </>
    </section>
  );
};
