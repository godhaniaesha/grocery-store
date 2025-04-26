import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '../slices/Category.slice';
import subcategoryReducer from '../slices/Category.slice';

const rootReducer = combineReducers({
    category: categoryReducer,
    subcategory: subcategoryReducer,
    // Add other reducers here as needed
});

export default rootReducer;