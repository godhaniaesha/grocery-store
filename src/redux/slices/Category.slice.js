import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create Category Action
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (formData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/createCategory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Get All Categories Action
export const getAllCategories = createAsyncThunk(
  'category/getAllCategories',
  async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getAllCategories');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Get Category By Id Action
export const getCategoryById = createAsyncThunk(
  'category/getCategoryById',
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getCategoryById/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Update Category Action
export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ id, formData }) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/updateCategoryById/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Delete Category Action
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteCategoryById/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Delete All Categories Action
export const deleteAllCategories = createAsyncThunk(
  'category/deleteAllCategories',
  async () => {
    try {
      const response = await axios.delete('http://localhost:4000/api/deleteAllCatrgory');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    totalCategories: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Category
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload.data);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Get All Categories
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
        state.totalCategories = action.payload.totalCategory;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Get Category By Id
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCategory = action.payload.data;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update Category
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(cat => cat._id === action.payload.data._id);
        if (index !== -1) {
          state.categories[index] = action.payload.data;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Delete Category
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(cat => cat._id !== action.meta.arg);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Delete All Categories
      .addCase(deleteAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAllCategories.fulfilled, (state) => {
        state.loading = false;
        state.categories = [];
        state.totalCategories = 0;
      })
      .addCase(deleteAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = categorySlice.actions;
export default categorySlice.reducer;