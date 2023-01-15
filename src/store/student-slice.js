import { createSlice } from "@reduxjs/toolkit"

const studentSlice = createSlice({
  name: "students",

  initialState: [{
  }],

  reducers: {

    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter((student) => student.id !== action.payload.id);
    },

    update: (state, action) => {
      const index = state.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    refresh: (state, action) => {
      return action.payload;
    }
  }
});

export const { add, remove, update, refresh } = studentSlice.actions;
export default studentSlice.reducer;
