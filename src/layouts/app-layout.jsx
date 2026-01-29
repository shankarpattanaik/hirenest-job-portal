import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="mt-6 px-5 py-4 sm:px-6 sm:py-5 text-center bg-gray-800 text-sm sm:text-base">
        Made with ❤️ by Shankar Pattanaik
      </div>
    </div>
  );
};

export default AppLayout;
