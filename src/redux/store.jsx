
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlices"

const store = configureStore ({
    reducer: {
        cart: cartSlice,
    },
})

export default store