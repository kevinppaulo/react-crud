import { createSlice } from "@reduxjs/toolkit"

const studentSlice = createSlice({
  name: "students",

  initialState: [{
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    address: "123 Main St",
    picture: "https://picsum.photos/200",
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