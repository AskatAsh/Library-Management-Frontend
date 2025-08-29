import { Outlet } from "react-router";
import { Header } from "../shared/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
