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
import { useDeleteBookMutation } from "../../api/apiSlice";
import type { BooksTableProps } from "../../types";
import AlertDialogModal from "../AlertDialog/AlertDialogModal";

const BooksTable: React.FC<BooksTableProps> = ({ booksData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState<string | null>(null);

  const [
    deleteBook,
    { data: deleteData, isLoading: isLoadingDelete, isError },
  ] = useDeleteBookMutation();
  console.log("delete book: ", deleteData);

  const onDelete = (bookId: string) => {
    setBookIdToDelete(bookId);
    setOpenDialog(true); // open dialog
  };

  const handleConfirmDelete = async () => {
    if (bookIdToDelete) {
      const res = await deleteBook(bookIdToDelete);
      console.log("Inside delete book function: ", res);
    }
  };

  const onEdit = (bookId) => {};

  const onBorrow = (bookId) => {};

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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit?.(book)}
                  >
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
                    onClick={() => onBorrow?.(book.isbn)}
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
    </div>
  );
};

export default BooksTable;
