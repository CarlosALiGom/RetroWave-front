import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  isLoading: boolean;
}

export const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
