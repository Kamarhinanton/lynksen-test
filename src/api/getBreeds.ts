import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    headers: {
      'x-api-key':
        'live_kvYToYQi3Fg4lw3i3CCCmS5u20NMfTb907xImwuT0FEzd4GLiGzda7JdSkyClgku',
    },
  }),
  endpoints: (builder) => ({
    fetchAllBreeds: builder.query({
      query: () => '/breeds',
    }),
  }),
})

export const { useFetchAllBreedsQuery } = breedsApi
