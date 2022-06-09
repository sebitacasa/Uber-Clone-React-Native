import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },

        setDestination: (state, action) => {
            state.destination = action.payload
        },

        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
         
        },
    
    }
    
}) // we can set directly the value of initialState using the method of createSlice.
    
export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions; // export all the actions from the reducer.

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
//  we export all the selectors that we need for pull from the other side // 

export default navSlice.reducer // we're exporting the reducer