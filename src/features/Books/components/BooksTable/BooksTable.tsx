import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import type React from "react";
import { useState } from "react";
import {
  useBorrowBookMutation,
  useDeleteBookMutation,
} from "../../api/apiSlice";
import type { BooksTableProps, IBookwithId } from "../../types";
import AlertDialogModal from "../AlertDialog/AlertDialogModal";
import { BorrowBookModal } from "../BorrowBook/BorrowBookModal";

const BooksTable: React.FC<BooksTableProps> = ({ booksData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState<string | null>(null);
  const [openBorrowModal, setOpenBorrowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBookwithId | null>(null);

  // delete book handlers
  const [deleteBook] = useDeleteBookMutation();

  const onDelete = (bookId: string) => {
    setBookIdToDelete(bookId);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (bookIdToDelete) {
      const res = await deleteBook(bookIdToDelete);
      console.log("Inside delete book function: ", res);
    }
  };

  // borrow book handlers
  const [borrowBook] = useBorrowBookMutation();

  const handleOpenBorrowModal = (book: IBookwithId) => {
    setSelectedBook(book);
    setOpenBorrowModal(true);
  };

  const handleCloseBorrowModal = () => {
    setSelectedBook(null);
    setOpenBorrowModal(false);
  };

  const handleBorrow = async (
    bookId: string,
    quantity: number,
    dueDate: string
  ) => {
    const borrowBookData = {
      book: bookId,
      quantity: Number(quantity),
      dueDate,
    };
    console.log(borrowBookData, typeof borrowBookData.quantity);
    if (borrowBookData) {
      const res = await borrowBook(borrowBookData);
      console.log("Inside borrow book function: ", res);
      if (res.data?.success) {
        window.alert(res.data?.message || "Book Borrowed successfully");
      }
    }
  };

  // const onEdit = (bookId) => {};

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption>
          A list of all available books in the library.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Serial</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-center">Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {booksData.length > 0 ? (
            booksData.map((book, idx) => (
              <TableRow key={book.isbn}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell className="text-center">{book.copies}</TableCell>
                <TableCell>
                  {book.available ? (
                    <span className="text-green-600 font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-600 font-medium">
                      Not Available
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete?.(book._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    disabled={!book.available}
                    onClick={() => handleOpenBorrowModal(book)}
                  >
                    Borrow
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-6 text-muted-foreground"
              >
                No books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* dialog modal */}
      <AlertDialogModal
        open={openDialog}
        setOpen={setOpenDialog}
        onConfirm={handleConfirmDelete}
        title="Delete Item"
        description="Are you sure you want to delete this item? This cannot be undone."
      />

      {/* borrow book modal */}
      {selectedBook && (
        <BorrowBookModal
          book={selectedBook}
          isOpen={openBorrowModal}
          onClose={handleCloseBorrowModal}
          onBorrow={handleBorrow}
        />
      )}
    </div>
  );
};

export default BooksTable;
