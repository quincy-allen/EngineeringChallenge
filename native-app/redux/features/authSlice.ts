
// import {
//   createSlice,
//   createAsyncThunk,
//   AsyncThunk,
//   PayloadAction,
// } from "@reduxjs/toolkit";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   UserCredential,
//   Auth,
// } from "@firebase/auth";

// interface UserCredentials {
//   email: string;
//   password: string;
// }

// // Initial state
// interface AuthState {
//   user: UserCredential | null;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   error: null,
// };
// // Firebase auth instance
// const auth: Auth = getAuth();

// // Async thunk for user authentication
// export const authenticateUser = createAsyncThunk<
//   UserCredential,
//   UserCredentials,
//   { rejectValue: string }
// >("auth/authenticateUser", async (userCredentials, { rejectWithValue }) => {
//   try {
//     const { email, password } = userCredentials;
//     const userCredential: UserCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// }) as AsyncThunk<UserCredential, UserCredentials, { rejectValue: string }>;

// // Auth slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(
//       authenticateUser.fulfilled,
//       (state, action: PayloadAction<UserCredential>) => {
//         state.user = action.payload;
//         state.error = null;
//       }
//     );
//     builder.addCase(
//       authenticateUser.rejected,
//       (state, action: PayloadAction<string>) => {
//         state.user = null;
//         state.error = action.payload;
//       }
//     );
//   },
// });

// export default authSlice.reducer;
