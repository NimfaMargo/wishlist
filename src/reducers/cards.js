import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  editingCard: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, { payload }) => ({ ...state, list: [...state.list, payload] }),
    updateCard: (state, { payload }) => {
      const filteredList = state.list.map((el) => (
        el.id === payload.id ? { id: el.id, ...payload } : el));
      return { ...state, list: filteredList };
    },
    removeCard: (state, { payload }) => (
      { ...state, list: state.list.filter((el) => el.id !== payload) }),
    setEditingCard: (state, { payload }) => (
      { ...state, editingCard: state.list.find((el) => el.id === payload) }),
    clearEditingCard: (state) => ({ ...state, editingCard: null }),
  },
});

export const {
  addCard, removeCard, updateCard, setEditingCard, clearEditingCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
