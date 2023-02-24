/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://strapi.cleverland.by';
const initialState = {
  books: [],
  categories: [],
  bookId: null,
  loading: false,
  error: null,
  errorIdBook: null,
  filterArr: [],
  path: '',
  categoriesBookId: '',
  valueInput: '',
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', (_, { rejectWithValue }) => {
  return axios.get(`${API_URL}/api/books`).then((response) => {
    // console.log(response)
    try {
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  });
});
export const fetchCategories = createAsyncThunk('book/fetchCategories', (_, { rejectWithValue }) => {
  return axios.get(`${API_URL}/api/categories`).then((response) => {
    // console.log(response)
    try {
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  });
});
export const fetchIdBook = createAsyncThunk('book/fetchIdBook', (id, { rejectWithValue }) => {
  return axios.get(`${API_URL}/api/books/${id}`).then((response) => {
    try {
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  });
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    filterBook(state, action) {
      if (action.payload === 'Все книги') {
        state.books.filter((el) => {
          // return el.categories[0] !== action.payload && state.filterArr.push(el);
          el.categories.map((e) => e === action.payload && state.filterArr.push(el));
        });
      } else {
        if (state.books.length === 0) {
          state.books.filter((el) => {
            // return el.categories[0] === action.payload && state.filterArr.push(el);
            el.categories.map((e) => e === action.payload && state.filterArr.push(el));
          });
        } else if (state.books.length !== 0) {
          state.filterArr = [];
          state.books.filter((el) => {
            // return el.categories[0] === action.payload && state.filterArr.push(el);
            el.categories.map((e) => e === action.payload && state.filterArr.push(el));
          });
        }
      }
    },
    getPath(state, action) {
      // state.categories.map(el => el.name === action.payload && state.path = el.path)
      state.categories.map((el) => {
        return el.name === action.payload;
      });
    },
    sortBook(state, action) {
      if (action.payload === true) {
        state.books.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === false) {
        state.books.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === true && state.filterArr !== 0) {
        state.filterArr.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === false && state.filterArr !== 0) {
        state.filterArr.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });
      }
    },
    getCategoriesBookId(state, action) {
      state.categoriesBookId = action.payload;
      // console.log(action.payload)
      // console.log(state.categoriesBookId)
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;

      state.error = '';
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchCategories.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.categories.unshift({ name: 'Все книги', path: 'all', id: 0 });
      state.error = '';
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchIdBook.pending]: (state) => {
      state.loading = true;
      state.errorIdBook = null;
    },
    [fetchIdBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookId = action.payload;
      state.errorIdBook = '';
    },
    [fetchIdBook.rejected]: (state, action) => {
      state.loading = false;
      state.errorIdBook = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sortBook, closeErr, filterBook, getPath, getCategoriesBookId } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
