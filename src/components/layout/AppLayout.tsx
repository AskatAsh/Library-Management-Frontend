import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { Header } from "../shared/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster richColors position="top-center" />
    </>
  );
};

export default AppLayout;
