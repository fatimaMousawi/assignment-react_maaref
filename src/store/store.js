import {configureStore,createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({name:'cart',initialState:[],reducers:{addToCart:(s,a)=>{const x=s.find(i=>i.id===a.payload.id);x?x.quantity++:s.push({...a.payload,quantity:1})},removeFromCart:(s,a)=>s.filter(i=>i.id!==a.payload),increaseQuantity:(s,a)=>{const x=s.find(i=>i.id===a.payload);if(x)x.quantity++},decreaseQuantity:(s,a)=>{const x=s.find(i=>i.id===a.payload);if(x){x.quantity--;if(x.quantity<=0)return s.filter(i=>i.id!==a.payload)}},clearCart:()=>[]}});
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart}=cartSlice.actions;
export const store=configureStore({reducer:{cart:cartSlice.reducer}});
