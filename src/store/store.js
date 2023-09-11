import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer// Import your async thunk

const store = configureStore({
  reducer: rootReducer, // Use your root reducer here
  // Use fetchEvents middleware
});

export default store;