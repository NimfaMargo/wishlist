import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: { list: [] },
  reducers: {
    addCard: (state, action) => ({ ...state, list: [...state.list, action.payload] }),
    removeCard: (state, action) => ({ ...state, list: state.list.filter((el) => el.id !== action.payload.id) }),
  },
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
