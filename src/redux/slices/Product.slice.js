import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching all products
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        return rejectWithValue({ message: 'Please login first' });
      }

      const response = await axios.get('http://localhost:4000/api/allProduct', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log(response.data, "API Response");
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  products: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch products';
      });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
