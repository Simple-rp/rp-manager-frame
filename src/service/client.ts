import { createApi } from '@reduxjs/toolkit/query/react'
import { sheetApiParams, sheetBaseQuery } from '../helper/basequery/sheeetBaseQuery'
import { transformSheetResponse } from '../helper/transformers/sheetHandler'

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: sheetBaseQuery,
  endpoints: (builder) => ({
    getClientDetails: builder.query<any, any>({
      query: () => `Entreprises!A1:J100${sheetApiParams}`,
      transformResponse: (response: any, _, arg) => {
        console.log(transformSheetResponse(response.values))
        console.log(transformSheetResponse(response.values).find((e) => arg?.code === e.code))
        return transformSheetResponse(response.values).find((e) => arg?.code === e.code)
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientDetailsQuery } = clientApi
