import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const addDataSlice = createSlice({
  name: "addCart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newData = action.payload;
      //    console.log(newItem)

      state.items.push({
        id: newData.id,
        image: newData.image,
        firstName: newData.FirstName,
        lastName: newData.LastName,
        fatherName: newData.fatherName,
        email: newData.email,
        address: newData.address,
        number: newData.number,
        date: newData.date,
        country: newData.country,
      });
    },

    removeItem(state, action) {
      const id = action.payload;
      console.log(id);
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export default addDataSlice;

export const addDataActions = addDataSlice.actions;
