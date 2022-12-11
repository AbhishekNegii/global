import { configureStore } from "@reduxjs/toolkit"
import addDataSlice from "./addDataSlice";

const Store = configureStore({
  reducer: {studentData: addDataSlice.reducer },
});

export default Store;