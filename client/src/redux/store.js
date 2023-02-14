import { configureStore } from '@reduxjs/toolkit'
import authReducer from './index'
import postBoxReducer from './postBoxReducer'

export default configureStore({
    reducer: {
        auth: authReducer ,
        postBox : postBoxReducer
    }
})