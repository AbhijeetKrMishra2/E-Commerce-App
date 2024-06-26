// importing the createSlice and the createAsyncThunk from the redux toolkit
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// This is the createAsyncThunk function which deals with the Api request and asynchronous data
const fetchItems = createAsyncThunk("productsList/getItems", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const res2 = await res.json();
  console.log(res2)
  return res2.map((product) => product);

});

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "productsList",
  initialState: initialState,
  reducers: {
  },
  // extrareducers based on the promise state returened by the createAsyncThunk function
  extraReducers: {
    // if promise stgate is full filled
    [fetchItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    // if promise stgate is rejected
    [fetchItems.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    // if promise stgate is pending
    [fetchItems.rejected]: (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

//  exporting productReducer, action, fetchProductItems and productSelector
export const productReducer = productSlice.reducer;
export const action = productSlice.actions;
export const fetchProductItems = fetchItems;
export const productSelector = (state) => state.productReducer;