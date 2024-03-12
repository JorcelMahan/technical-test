import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    pets: [{
        id: 1,
        name: 'Buddy',
        type: 'Dog',
        genre: 'M',
        image: 'https://via.placeholder.com/150'
    },
    ]
};



export const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        addPet: (state, action) => {
            state.pets.push(action.payload);
        },
    }
});

export const { addPet } = petsSlice.actions;

export default petsSlice.reducer;