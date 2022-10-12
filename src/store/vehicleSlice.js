import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: {
    allVehicles: [],
  },
  reducers: {
    getVehicles(state, action) {
      state.allVehicles = action.payload.allVehicles;
    },
  },
});


export const vehicleActions = vehicleSlice.actions;

export default vehicleSlice;
