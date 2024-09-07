import { configureStore } from "@reduxjs/toolkit";
import  navbarReducer from './features/navbarSlice';
import themeReducer from './features/themeSlice'

export const store = configureStore({
    reducer: {
      navbar :  navbarReducer,
      theme: themeReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch