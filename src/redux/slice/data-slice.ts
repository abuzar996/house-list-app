import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = "https://wizard-world-api.herokuapp.com/houses";

interface TraitsData {
  id: string;
  name: string;
}
interface HouseHeadData {
  id: string;
  firstName: string;
  lastName: string;
}
interface HouseData {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: HouseHeadData[];
  traits: TraitsData[];
}

interface DataState {
  loading: boolean;
  data: HouseData[];
  error: string;
}
const initialState: DataState = {
  loading: false,
  data: [],
  error: "",
};
export const getData = createAsyncThunk<HouseData[]>(
  "users/update",
  async () => {
    return await axios
      .get(`${API}`)
      .then((response) => response.data)
      .catch((error) => error.response);
  }
);
export const fetchData = createAsyncThunk("fetchData", async () => {});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state) => {
      state.error = "Something went wrong";
      state.loading = false;
    });
  },
});

export default dataSlice.reducer;
