import { configureStore } from '@reduxjs/toolkit'
import { breedsApi } from '@/api/getBreeds'

const store = configureStore({
  reducer: {
    [breedsApi.reducerPath]: breedsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breedsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
