import { Outlet } from "react-router-dom";

import Footer from "@/components/common/Footer";

const LayoutWithFooter = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWithFooter;
