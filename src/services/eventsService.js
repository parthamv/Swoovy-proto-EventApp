import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data/events.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Rethrow the error to be handled by the thunk's rejection action
  }
});