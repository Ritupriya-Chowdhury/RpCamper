import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductsState } from '../../types/product';

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};


export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://rp-camper-server.vercel.app/api/products');
    return response.data.data; 
  }
);


export const deleteProduct = createAsyncThunk<void, string>(
  'products/deleteProduct',
  async (productId) => {
    await axios.delete(`https://rp-camper-server.vercel.app/api/products/${productId}`);
  }
);


export const updateStock = createAsyncThunk<Product, { productId: string; quantity: number }>(
  'products/updateStock',
  async ({ productId, quantity }) => {
    const response = await axios.put(`https://rp-camper-server.vercel.app/api/products/${productId}`, {
      stock: quantity,
    });
    return response.data.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      
      // Delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.meta.arg; 
        state.products = state.products.filter(product => product._id !== productId);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to delete product';
      })

      // Update stock
      .addCase(updateStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStock.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(product => product._id === updatedProduct._id);
        if (index !== -1) {
          state.products[index] = updatedProduct; 
        }
      })
      .addCase(updateStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update stock';
      });
  },
});

export default productsSlice.reducer;
