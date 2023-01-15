import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../store/student-slice";

const store = configureStore({
    reducer: {
        students: studentReducer,
    },
});

export default store;