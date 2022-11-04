import {configureStore} from '@reduxjs/toolkit'
import { PostReducer } from '../features/posts/postSlice'
import { userReducer } from '../features/user/userSlice'

export const store = configureStore({
  reducer:{
    posts: PostReducer,
    users: userReducer,
  }
})