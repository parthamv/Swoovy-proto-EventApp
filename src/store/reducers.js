// reducers.js
import { combineReducers } from 'redux';
import eventsReducer from './eventsSlice'; // Import your events reducer
// Import other reducers as needed

const rootReducer = combineReducers({
  events: eventsReducer, // Include events reducer
  // Include other reducers here
});

export default rootReducer;
