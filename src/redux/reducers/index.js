import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '../slices/Category.slice';
import subcategoryReducer from '../slices/Category.slice';
import authReducer from '../slices/Auth.slice';

const rootReducer = combineReducers({
    category: categoryReducer,
    subcategory: subcategoryReducer,
    auth: authReducer,
    // Add other reducers here as needed
});

export default rootReducer;