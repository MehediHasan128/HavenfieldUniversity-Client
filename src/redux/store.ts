import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice';
import { baseapi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseapi.reducerPath]: baseapi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseapi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch