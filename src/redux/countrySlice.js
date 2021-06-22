import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from "./api";

const initialState =  {
    data: [],
    loading: false,
    lastFetch: null,
    displayCount: 16,
    regionFilterOn: false,
    regionSelected: '',
    borderNames: [],
    bordersLoading: false
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        dataReceived: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        
        dataRequested: (state, action) => {
            state.loading = true;
        },

        apiError: (state, action) => {
            const { error } = action.payload
            state.loading = false
            state.bordersLoading = false
            state.error = error
        },

        searchFilter: (state, action) => {
            state.data = state.data.filter(data => data.name.toLowerCase().includes(action.payload.toLowerCase()))
        },

        regionFilterIntiated: (state, action) => {
            state.regionFilterOn = true
            state.regionSelected = action.payload
        },

        bordersReceived: (state, action) => {
            state.borderNames = action.payload
            state.bordersLoading = false
            state.error = null
        },

        bordersRequested: (state, action) => {
            state.bordersLoading = true
            state.borderNames = []
        }

    }
})

// Export Actions
export const { dataReceived, dataRequested, apiError, searchFilter, regionFilterIntiated, bordersReceived, bordersRequested } = countrySlice.actions

export const loadData = () => (dispatch, getState) => {

    return dispatch(
        apiCallBegan({
          url: 'all',
          method: 'get',
          onStart: dataRequested.type,
          onSuccess: dataReceived.type,
          onError: apiError.type
        })
      );
}

export const countrySearch = (searchText, fullText) => (dispatch) => {

    const url = fullText ? `name/${searchText}?fullText=true` : `name/${searchText}`

    return dispatch(
        apiCallBegan({
          url: url,
          method: 'get',
          onStart: dataRequested.type,
          onSuccess: dataReceived.type,
          onError: apiError.type
        })
    );
}

export const countryBorders = (countryThreeLetterCodes) => (dispatch, getState) => {

    const codesStr = countryThreeLetterCodes.toString().replaceAll(",",";")
    const url = `alpha?codes=${codesStr};&fields=name`

    return dispatch(
        apiCallBegan({
            url: url,
            method: 'get',
            onStart: bordersRequested.type,
            onSuccess: bordersReceived.type,
            onError: apiError.type
        })
    );
}

export const filterByRegion = (region) => (dispatch) => {

    dispatch(regionFilterIntiated(region))

    return dispatch(
        apiCallBegan({
          url: `region/${region}`,
          method: 'get',
          onStart: dataRequested.type,
          onSuccess: dataReceived.type,
          onError: apiError.type
        })
      );
}

export const countrySearchWithRegion = (searchText) => (dispatch) => {
    dispatch(searchFilter(searchText))
}

export default countrySlice.reducer