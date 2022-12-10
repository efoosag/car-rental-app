import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3000/api/v1/rentals";

const initialState = {
  rents: [],
  status: "idle", // "idle"   ||  "Loading" || "succeeded" || "fail"
  error: null,
};

export const fetchRents = createAsyncThunk("posts/fetchRents", async () => {
  try {
    const response = await axios.get(POST_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addNewRent = createAsyncThunk(
  "rents/addNewRent",
  async (initialRent) => {
    try {
      const response = await axios.post(POST_URL, initialRent);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const rentsSlice = createSlice({
  name: "rents",
  initialState,
  reducers: {
    // rentAdded(state, action) {
    //   state.rents.push(action.payload);
    // },
  },
  extraReducers(builder) {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(fetchRents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rents = action.payload;
      })
      .addCase(fetchRents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewRent.fulfilled, (state, action) => {
        console.log(action.payload);
        state.rents.push(action.payload);
      });
  },
});

export const selectAllRents = (state) => state.rents.rents;
export const getRentsStatus = (state) => state.rents.status;
export const getRentsError = (state) => state.rents.error;
export const { rentAdded } = rentsSlice.actions;
export default rentsSlice.reducer;
