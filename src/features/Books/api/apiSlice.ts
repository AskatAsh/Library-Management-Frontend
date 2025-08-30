import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['books'],
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => '/books',
            providesTags: ['books']
        }),
        addNewBook: build.mutation({
            query: (bookData) => ({
                url: '/books',
                method: 'POST',
                body: bookData
            }),
            invalidatesTags: ['books']
        }),
        deleteBook: build.mutation({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books']
        })
    })
})

export const { useGetAllBooksQuery, useAddNewBookMutation, useDeleteBookMutation } = booksApi;