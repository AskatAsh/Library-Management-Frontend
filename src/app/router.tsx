import AppLayout from "@/components/layout/AppLayout";
import { createBrowserRouter, type RouteObject } from "react-router";

const rootChildren: RouteObject[] = [
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/pages/Home/Home")).default,
    }),
    HydrateFallback: () => <div>Loading...</div>,
  },
  {
    path: "all-books",
    lazy: async () => ({
      Component: (await import("@/features/Books")).default,
    }),
    HydrateFallback: () => <div>Loading...</div>,
  },
  {
    path: "add-new-book",
    lazy: async () => ({
      Component: (
        await import("@/features/Books/components/AddBook/AddNewBook")
      ).default,
    }),
    HydrateFallback: () => <div>Loading...</div>,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: rootChildren,
  },
]);
