import { Outlet } from "react-router-dom";

import Footer from "@/components/common/Footer";

const LayoutWithFooter = () => {
  return (
    <>
      <div className="pb-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutWithFooter;
