import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Footer from "../shared/Footer/Footer";
import { Header } from "../shared/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </>
  );
};

export default AppLayout;
