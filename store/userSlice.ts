import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name: string;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  name: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      console.tron.log("Redux setName:", action.payload);
      state.name = action.payload;
    },
    clearName(state) {
      console.tron.log("Redux clearName");
      state.name = "";
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setName, clearName, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;