// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for handling events
const eventsSlice = createSlice({
  // Name of the slice, typically used as a prefix for generated action types
  name: 'events',
  
  // Initial state of the slice, which is an empty array in this case
  initialState: [],
  
  // Reducers are functions that determine changes to the state.
  // In this slice, we only have one reducer "setEvents".
  reducers: {
    // The "setEvents" reducer updates the entire state to the payload of the action.
    // The first parameter of a reducer (_ in this case, typically state) represents the previous state.
    // Since the state is entirely replaced, it is not used and is represented as "_".
    setEvents: (_, action) => action.payload, 
  },
});

// Export the action creator generated for "setEvents".
export const { setEvents } = eventsSlice.actions;

// Export the reducer function to be used in the Redux store.
export default eventsSlice.reducer;
