import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '../slices/Category.slice';
import subcategoryReducer from '../slices/Category.slice';
import productReducer from '../slices/Product.slice';


const rootReducer = combineReducers({
    category: categoryReducer,
    subcategory: subcategoryReducer,
    product: productReducer,
    // Add other reducers here as needed
});

export default rootReducer;