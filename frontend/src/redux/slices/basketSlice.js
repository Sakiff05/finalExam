import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: JSON.parse(localStorage.getItem("basket")) || [],
    },
    reducers: {
        increment: (state, action) => {
            let findedProduct = state.basket.find(item => item._id == action.payload._id);
            findedProduct.count++
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        decrement: (state, action) => {
            let findedProduct = state.basket.find(item => item._id == action.payload._id);
            if (findedProduct.count > 1) {
                findedProduct.count--
                localStorage.setItem("basket", JSON.stringify(state.basket))
            } else {
                state.basket = state.basket.filter(item => item._id != findedProduct._id)
                console.log(findedProduct._id);
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }

        },
        addBasket: (state, action) => {
            let findedProduct = state.basket.find(item => item._id == action.payload._id)
            if (findedProduct) {
                findedProduct.count++
            } else {
                state.basket.push({ ...action.payload, count: 1 })
            }
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        deleteProduct: (state, action) => {
            let findedProduct = state.basket.find(item => item._id == action.payload._id);
            state.basket = state.basket.filter(item => item._id != findedProduct._id)
            console.log(findedProduct._id);
            localStorage.setItem("basket", JSON.stringify(state.basket))
        }

    },
})

export const { increment, decrement, addBasket, deleteProduct } = basketSlice.actions

export default basketSlice.reducer