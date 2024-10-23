import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishlistItem:(state ,action)=>{
            state.push(action.payload)

        },
        removeWishlistItem:(state,action)=>{
            state.filter((item)=>item.id != action.payload)

        }
    }
})

export const {addWishlistItem, removeWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer