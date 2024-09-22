import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productSlice'; // Adjust the path accordingly
import navbarReducer from './features/navbarSlice';
import themeReducer from './features/themeSlice';
import cartReducer from './features/cartSlice';
import orderReducer from './features/orderSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    theme: themeReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Adjust if you need to handle non-serializable data
    }),
  });




// Define `RootState` and `AppDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
