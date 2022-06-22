import { createSlice } from '@reduxjs/toolkit'
import denim from 'assets/denim.jpg'

let products = [
	{
		id: 1,
		name: 'Red Hoodie',
		color: 'RED',
		price: 14.99,
		size: 'M',
		type: 'Hoodie - Red',
		img: denim,
	},
	{
		id: 2,
		name: 'Blue Denim Shirt',
		color: 'Blue',
		price: 16.99,
		size: 'M',
		type: 'Shirt - Blue',
		img: denim,
	},
]

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: products,
		currentCart: [],
		totalItems: 0,
		totalPrice: 0,
		display: 'hidden',
	},
	reducers: {
		addToCart: (state, action) => {
			state.currentCart.push(action.payload)
			state.totalItems += 1
		},
		addQuantity: (state, action) => {
			let item = state.currentCart.find((item) => item.product.id === action.payload)
			let newCart = state.currentCart.filter((item) => item.product.id !== action.payload)

			item.quantity += 1
			newCart.push(item)
			state.currentCart = newCart
		},
		increaseCartQuantity: (state, action) => {
			let newState = state.currentCart.map((item) => {
				if (item.product.id === action.payload) {
					item.quantity += 1
				}
				return item
			})
			state.currentCart = newState
			state.totalItems += 1
		},
		subtractCartQuantity: (state, action) => {
			let newCart = state.currentCart.map((item) => {
				if (item.product.id === action.payload) {
					item.quantity -= 1
				}
				return item
			})
			state.currentCart = newCart.filter((item) => item.quantity !== 0)
			state.totalItems -= 1
		},
		addToTotal: (state, action) => {
			state.totalPrice += action.payload
		},
		subtractFromTotal: (state, action) => {
			state.totalPrice -= action.payload
		},
		displayCart: (state) => {
			state.display = null
		},
		hideCart: (state) => {
			state.display = 'hidden'
		},
	},
})

export const {
	addToCart,
	displayCart,
	hideCart,
	addQuantity,
	addToTotal,
	subtractFromTotal,
	increaseCartQuantity,
	subtractCartQuantity,
} = cartSlice.actions

export default cartSlice.reducer
