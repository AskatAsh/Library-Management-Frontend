import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['books', 'borrow'],
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
        }),
        getBorrowdBooks: build.query({
            query: () => '/borrow',
            providesTags: ['borrow']
        }),
        borrowBook: build.mutation({
            query: (borrowBookData) => ({
                url: '/borrow',
                method: 'POST',
                body: borrowBookData
            }),
            invalidatesTags: ['books', 'borrow']
        })
    })
})

export const { useGetAllBooksQuery, useAddNewBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowdBooksQuery } = booksApi;