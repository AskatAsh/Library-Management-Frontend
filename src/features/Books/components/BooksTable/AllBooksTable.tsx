import { useGetAllBooksQuery } from "../../api/apiSlice";

const AllBooksTable = () => {
  const { data, error, isLoading } = useGetAllBooksQuery("booksApi");
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
  return <div>AllBooksTable</div>;
};

export default AllBooksTable;
