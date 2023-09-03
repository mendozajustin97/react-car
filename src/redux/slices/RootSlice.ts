import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        body_style: "Body Style",
        value: "Value",
        color: "Color",
        seating: "Seating",
    },
    reducers: {
        //action is submitted elsewhere - written to state.name
        chooseMake: (state,action) => { state.make = action.payload }, // All we are doing is setting the input to the state.name
        chooseModel: (state,action) => { state.model = action.payload },
        chooseYear: (state,action) => { state.year = action.payload },
        chooseBodyStyle: (state,action) => { state.body_style = action.payload },
        chooseValue: (state,action) => { state.value = action.payload },
        chooseColor: (state,action) => { state.color = action.payload },
        chooseSeating: (state,action) => { state.seating = action.payload },

    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel, chooseYear, chooseBodyStyle, 
    chooseValue, chooseColor, chooseSeating } = rootSlice.actions