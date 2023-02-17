import { configureStore } from '@reduxjs/toolkit'
import { bookReducer } from './bookslice'

export const store = configureStore({
  reducer: {
    book: bookReducer
  }
})