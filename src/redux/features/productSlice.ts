import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateProduct, Product, ProductsState } from "../../types/product";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch all products
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://rp-camper-server.vercel.app/api/products"
    );
    return response.data.data;
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk<void, string>(
  "products/deleteProduct",
  async (productId) => {
    await axios.delete(
      `https://rp-camper-server.vercel.app/api/products/${productId}`
    );
  }
);

// Update stock quantity
export const updateStock = createAsyncThunk<
  Product,
  { productId: string; quantity: number }
>("products/updateStock", async ({ productId, quantity }) => {
  const response = await axios.put(
    `https://rp-camper-server.vercel.app/api/products/${productId}`,
    { stockQuantity: quantity }
  );
  return response.data.data;
});

// Create a new product
export const createProduct = createAsyncThunk<Product, CreateProduct>(
  "products/createProduct",
  async (newProduct) => {
    const { name, category, price, stockQuantity, description, images } = newProduct;

    const response = await axios.post(
      "https://rp-camper-server.vercel.app/api/products/create-product",
      {
        name,
        category,
        price,
        stockQuantity,
        description,
        images,
      }
    );
    console.log('new product',newProduct)
    return response.data.data;
  }
);

export const updateProduct = createAsyncThunk<
  Product,
  { productId: string; updates: Partial<Product> }
>("products/updateProduct", async ({ productId, updates }) => {
  const response = await axios.put(
    `https://rp-camper-server.vercel.app/api/products/${productId}`,
    updates
  );
  return response.data.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.meta.arg;
        state.products = state.products.filter(
          (product) => product._id !== productId
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete product";
      })
      .addCase(updateStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStock.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update stock";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to create product";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = { ...state.products[index], ...updatedProduct };
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update product";
      });
  },
});

export default productsSlice.reducer;
