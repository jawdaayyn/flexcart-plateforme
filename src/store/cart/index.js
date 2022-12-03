import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiEndpoint}`,
  }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (params) => ({
        url: `/carts/${params.id}`,
      }),
    }),
    deleteItem: builder.mutation({
      query: (params) => ({
        url: `/carts/${params.id}/${params.itemid}`,
        method: "DELETE",
      }),
    }),
  }),
});
