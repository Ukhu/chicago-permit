import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { EPermitActions } from './permitActions';
import { PermitData } from '../../components/PermitCard';

interface PermitState {
  permits: PermitData[];
  loading: boolean,
  error: string
}

const initialState: PermitState = {
  permits: [],
  loading: false,
  error: ""
};

export const permitSlice = createSlice({
  name: 'permit',
  initialState,
  reducers: {
    fetchPermits: (state, action) => {
      return {
        loading: false,
        error: "",
        permits: action.payload
      }
    },
  },
  extraReducers: {
    [EPermitActions.FETCH_PERMITS_FAILED]: () => {
      return {
        loading: false,
        error: "Error occured while fetching permits",
        permits: []
      }
    },
    [EPermitActions.FETCH_PERMITS_LOADING]: () => {
      return {
        loading: true,
        error: "",
        permits: []
      }
    },
  }
});

export const { fetchPermits } = permitSlice.actions;

export const getPermits = (state: RootState) => state.permit.permits;

export default permitSlice.reducer;
