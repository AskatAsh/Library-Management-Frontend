import Container from "@/components/shared/Container/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { useGetBorrowdBooksQuery } from "../../api/apiSlice";
import type { BookSummary } from "../../types";

const ShowBorrowedBooks = () => {
  const { data, isLoading, isError, error } =
    useGetBorrowdBooksQuery(undefined);

  // Safe access to book summary array
  const bookSummery: BookSummary[] = data?.data || [];

  if (isLoading) {
    return (
      <Container className="py-8 text-center">
        Loading borrowed books...
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="py-8 text-center text-red-500">
        Error fetching borrowed books: {error?.toString() || "Unknown error"}
      </Container>
    );
  }

  return (
    <Container className="overflow-x-auto py-8">
      <Table className="min-w-[400px]">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookSummery.length > 0 ? (
            bookSummery.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.book.title}</TableCell>
                <TableCell>{item.book.isbn}</TableCell>
                <TableCell>{item.totalQuantity}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No books borrowed yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ShowBorrowedBooks;
