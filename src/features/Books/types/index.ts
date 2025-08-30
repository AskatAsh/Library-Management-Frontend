export interface IBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
    createdAt: string;
    updatedAt: string;
}

export type BooksTableProps = {
    booksData: IBook[]
    onEdit?: (book: IBook) => void
    onDelete?: (isbn: string) => void
    onBorrow?: (isbn: string) => void
}