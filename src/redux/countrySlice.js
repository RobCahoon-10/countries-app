import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from "./api";

const initialState =  {
    data: {},
    loading: false,
    lastFetch: null,
    maxType: 1,
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        dataReceived: (state, action) => {
            state.data =  action.payload
            state.loading = false
            state.error = null
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        apiError: (state, action) => {
            const { error } = action.payload
            state.loading = false
            state.error = error
        }
    }
})

// Export Actions
export const { dataReceived, loading, apiError } = countrySlice.actions

export const loadData = () => (dispatch) => {

    return dispatch(
        apiCallBegan({
          url: 'all',
          method: 'get',
          onStart: loading.type,
          onSuccess: dataReceived.type,
          onError: apiError.type
        })
      );
}

export default countrySlice.reducer