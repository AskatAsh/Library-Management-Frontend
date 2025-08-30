import Container from "@/components/shared/Container/Container";
import { Button } from "@/components/ui";
import { Link } from "react-router";
import { useGetAllBooksQuery } from "../../api/apiSlice";
import BooksTable from "./BooksTable";

const AllBooksTable = () => {
  const { data, error, isLoading } = useGetAllBooksQuery("booksApi");

  const onEdit = () => {};
  const onDelete = () => {};
  const onBorrow = () => {};

  console.log(data);
  if (isLoading) {
    return (
      <div className="text-lg text-white/70 text-center mx-auto">
        Loading Books...
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-lg text-white/70 text-center mx-auto">
        Error: Sorry! an unexpected error occured.
      </div>
    );
  }

  return (
    <Container className="py-5">
      <div className="flex items-center justify-between my-5">
        <h2 className="text-2xl font-medium">All Books Data</h2>
        <Link to="/add-new-book">
          <Button>Add New Book</Button>
        </Link>
      </div>
      <BooksTable
        booksData={data.data}
        onBorrow={onBorrow}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </Container>
  );
};

export default AllBooksTable;
