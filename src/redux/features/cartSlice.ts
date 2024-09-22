// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id);
      if (existingItem) {
        if (existingItem.quantity < product.stockQuantity) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.product._id === productId);
      if (existingItem && existingItem.quantity < existingItem.product.stockQuantity) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.product._id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.product._id !== action.payload);
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
