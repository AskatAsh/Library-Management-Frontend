// EditBook.tsx
import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useUpdateBookMutation } from "../../api/apiSlice";
import type { IAddBook } from "../../types";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // book data comes from location.state (passed from BooksTable or details page)
  const bookData = location.state as IAddBook;

  const form = useForm<IAddBook>({
    defaultValues: {
      title: bookData?.title || "",
      author: bookData?.author || "",
      genre: bookData?.genre || "FICTION",
      isbn: bookData?.isbn || "",
      description: bookData?.description || "",
      copies: bookData?.copies || 1,
      available: bookData?.available ?? true,
    },
  });

  const [editBook, { isLoading }] = useUpdateBookMutation();

  const handleSubmit = async (updatedBook: IAddBook) => {
    console.log(id, updatedBook);
    try {
      const res = await editBook({
        bookId: id,
        bookData: updatedBook,
      }).unwrap();

      console.log("Book update response: ", res);

      if (res.success) {
        toast.success(res.message || "Book updated successfully.");
        navigate("/all-books");
      } else {
        toast.error(res.message || "Error while updating book.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error: while updating book.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              rules={{ required: "Author is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="genre"
              rules={{ required: "Genre is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non-fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isbn"
              rules={{ required: "ISBN is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ISBN number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter book description"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="copies"
              rules={{ required: "Copies is required", min: 1 }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 mt-6">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0">Available</FormLabel>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            {isLoading ? "Updating Book..." : "Update Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditBook;
