import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Cat {
  id: string
  url: string
}

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
    fetchCatsByBreedId: builder.query({
      query: ({
        limit = 10,
        breedId,
      }: {
        limit?: number
        breedId?: string
      }) => ({
        url: '/images/search',
        params: {
          limit: limit,
          breed_id: breedId,
        },
      }),
      transformResponse: (response: Cat[]) => {
        return response.map((cat) => ({
          id: cat.id,
          url: cat.url,
        }))
      },
    }),
  }),
})

export const { useFetchCatsByBreedIdQuery } = breedsApi
