import { useState } from "react"; // Import useState
import TopNavbar from "./Header";
import Sidebar from "./SideBar";
import BreadCrumbs from "./BreadCrumbs";
import { CustomModalProvider } from "../modal/ModalContext";
import { CommonTaskModal } from "../modal/TaskModal";
import { Toaster } from "react-hot-toast";
import { TaskProvider } from "../components/TaskListContext";
import { Outlet } from "react-router";

const LayoutWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <TaskProvider>
      <CustomModalProvider>
        <div className="h-screen w-screen flex flex-col overflow-hidden font-sans">
          <TopNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

          <div className="flex flex-1 overflow-hidden relative">
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            <main className="flex-1 overflow-y-auto bg-bg-secondary relative transition-colors duration-200 w-full">
              <BreadCrumbs />
              <Outlet />
              <Toaster position="top-right" />
              <CommonTaskModal />
            </main>
          </div>
        </div>
      </CustomModalProvider>
    </TaskProvider>
  );
};

export default LayoutWrapper;
