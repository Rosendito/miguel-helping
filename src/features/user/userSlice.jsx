import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AuthAPI from "../../api/AuthAPI";
import UserAPI from "../../api/UserAPI";

import { loginAdapter } from "../../adapters/User.Adapter";
import { removeKey, setKey, setSession } from "../../api/jwt";

const userAPI = new UserAPI();
const authAPI = new AuthAPI();

const initialState = {
  value: {
    email: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    document_number: ""
  },
  errorMessage: "",
  loading: false
};

export const login = createAsyncThunk(
  "user/fetchLogin",
  async (loginValues, { rejectWithValue }) => {
    const { data } = await authAPI.login(loginAdapter(loginValues));
    if (data.errors.length) {
      return rejectWithValue(data?.errors[0]?.error)
    }
    // The value we return becomes the `fulfilled` action payload
    return data.data;
  }
);

export const whoAmI = createAsyncThunk(
  "user/whoAmI",
  async (_, { rejectWithValue }) => {
    const response = await userAPI.get();
    if (response.errors.length) {
      return rejectWithValue(response?.errors[0]?.error)
    }
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.value = initialState.value
      removeKey()
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        setKey(action.payload.jwt);
        setSession(action.payload.jwt)
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.errorMessage = "";
        state.loading = true;
      })

    builder
      .addCase(whoAmI.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(whoAmI.rejected, (state, action) => {
        removeKey();
      })
  },
});

export const { logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they"re used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsLogged = (state) => !!state.user?.value?.email
export const selectUserLogged = (state) => state.user?.value || {}
export const selectUserErrorMessage = (state) => state.user?.errorMessage || ""
export const selectUserLoading = (state) => state.user?.loading || false

export default userSlice.reducer;