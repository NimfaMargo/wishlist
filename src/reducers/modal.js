import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'modal',
  initialState: { isModalVisible: false },
  reducers: {
    showModal: (state) => ({ ...state, isModalVisible: true }),
    hideModal: (state) => ({ ...state, isModalVisible: false }),
    toggleModal: (state) => ({ ...state, isModalVisible: !state.isModalVisible }),
  },
});

export const { showModal, hideModal, toggleModal } = actions;

export default reducer;
