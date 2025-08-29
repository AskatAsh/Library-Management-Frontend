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
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: rootChildren,
  },
]);
