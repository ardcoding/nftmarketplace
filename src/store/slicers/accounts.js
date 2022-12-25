import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    account : null,
    myNFTs: null
}

export const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers:{
        setAccount:(state, action)=>{
            state.account = action.payload;
        },

        setmyNFTs:(state, action)=>{
            state.myNFTs = action.payload;
        }
    }
})

export const {setAccount, setmyNFTs} = accountsSlice.actions;
export default accountsSlice.reducer;