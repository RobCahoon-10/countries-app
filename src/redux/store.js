import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import api from "../api/countriesAPI";
import countrySlice from './countrySlice'

const reducers = combineReducers({
  country: countrySlice
})

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }), api]
})

export default store;