const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, { payload }) => ({
      ...state,
    }),
    authRegister: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authUpdateUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
      accessToken: payload.accessToken,
    }),
    authFetchMe: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authRefreshToken: (state, { payload }) => ({}),
    authLogOut: (state, { payload }) => ({}),
  },
});
export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authRefreshToken,
  authFetchMe,
  authLogOut,
} = authSlice.actions;
export default authSlice.reducer;
