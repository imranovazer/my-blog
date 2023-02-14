import { createSlice } from "@reduxjs/toolkit"

const postBox =createSlice(
    {
        name:'postBox' ,
        initialState: {
            isActive : false 
        } ,
        reducers : {
            togglePostBox:(state)=>
            {   
                state.isActive = !state.isActive
             
            }
        }
    }
)
export const {togglePostBox} = postBox.actions ;

export default postBox.reducer ;