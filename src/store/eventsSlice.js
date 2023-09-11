import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    setEvents: (_, action) => action.payload, // Set events in the state to the payload
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;