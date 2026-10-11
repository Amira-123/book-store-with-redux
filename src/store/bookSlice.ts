import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getBooks=createAsyncThunk('books/getBooks',async()=>{
    try{
        const res= await fetch('http://localhost:3009/books');
        const data = await res.json();
        console.log('data',data)
        return data
    }catch(error){
        console.log(error)
    }
 
})

const bookSlice=createSlice({
    name:"books",
    initialState:{books:null,isLoading:false},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.isLoading = true;
              // state.status = "pending";
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                // state.status = "fulfilled";
                state.isLoading=false;
                state.books = action.payload;
                console.log(state.books)
                console.log(action);
            })
            .addCase(getBooks.rejected, (state) => {
               state.isLoading=false;
             //  state.status = "rejected";
            });
    },
});
export default bookSlice.reducer;


