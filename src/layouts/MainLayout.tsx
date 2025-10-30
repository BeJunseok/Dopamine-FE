import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-[100dvh] w-screen bg-black flex justify-center">
      <main className="w-full max-w-[375px] bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
