import {configureStore} from '@reduxjs/toolkit'
import { PostReducer } from '../features/posts/postSlice'

export const store = configureStore({
  reducer:{
    posts: PostReducer
  }
})