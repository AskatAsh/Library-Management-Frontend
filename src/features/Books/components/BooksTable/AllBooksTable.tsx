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
    <div>
      <BooksTable
        booksData={data.data}
        onBorrow={onBorrow}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default AllBooksTable;
