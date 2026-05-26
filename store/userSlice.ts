import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name: string;
};

const initialState: UserState = {
  name: "",
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
  },
});

export const { setName, clearName } = userSlice.actions;
export default userSlice.reducer;