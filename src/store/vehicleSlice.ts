import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: {
    vehicleCount: 0,
    allVehicles: []
  },
  reducers: {
    getVehicles(state, action) {
      state.vehicleCount = action.payload.vehicleCount;
      state.allVehicles = action.payload.allVehicles;
      // add vehicles to state vehicles
    },
  },
});


export const vehicleActions = vehicleSlice.actions;

export default vehicleSlice;
