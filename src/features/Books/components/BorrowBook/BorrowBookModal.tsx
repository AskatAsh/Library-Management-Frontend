import {
  Button,
  Calendar,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { format, startOfDay } from "date-fns";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import type { IBookwithId } from "../../types";

interface BorrowBookModalProps {
  book: IBookwithId;
  isOpen: boolean;
  onClose: () => void;
  onBorrow: (bookId: string, quantity: number, dueDate: string) => void;
}

interface FormValues {
  quantity: number;
  dueDate: Date | undefined;
}

export const BorrowBookModal: React.FC<BorrowBookModalProps> = ({
  book,
  isOpen,
  onClose,
  onBorrow,
}) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      quantity: 1,
      dueDate: new Date(),
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.dueDate) return;
    onBorrow(book._id, data.quantity, data.dueDate.toISOString());
    onClose();
  };

  const today = startOfDay(new Date());

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Add quantity and due date and click borrow button
        </DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          {/* Quantity */}
          <div>
            <Label htmlFor="quantity" className="mb-2">
              Quantity
            </Label>
            <Input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
                max: {
                  value: book.copies,
                  message: `Only ${book.copies} copies available`,
                },
              })}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          {/* Due Date */}
          <div>
            <Label htmlFor="dueDate" className="mb-2">
              Due Date
            </Label>
            <Controller
              control={control}
              name="dueDate"
              rules={{
                required: "Due Date is required",
                validate: (value) =>
                  value && value >= today
                    ? true
                    : "Due Date cannot be in the past",
              }}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left"
                    >
                      {field.value
                        ? format(field.value, "PPP")
                        : "Select due date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => startOfDay(date) < today}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.dueDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dueDate.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">Borrow</Button>
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
